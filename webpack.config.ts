/**
 * 这里自定义构建流程是为了能够处理模板中对任意位置静态资源的引用, 并对静态资源进行分类存储
 * 同时也修复了默认配置下, 样式文件引用的静态资源会被放置到根目录的问题.
 * */

// @ts-nocheck

import { Configuration } from 'webpack';

module.exports = (options: Configuration) => {
  const prod = options.mode === 'production';

  // 禁止 AngularCompilerPlugin 直接读取模板文件, 这样才能在编译前使用 html-loader 对模板进行预处理
  const target = options.plugins.find(v => v.constructor.name === 'AngularCompilerPlugin');
  (target as AngularCompilerPlugin).options.directTemplateLoading = false;

  // 修改 file-loader 配置并添加 html-loader
  options.module.rules = options.module.rules
    .filter(v => !(v.loader && typeof v.loader === 'string' && v.loader.indexOf('file-loader') !== -1));

  options.module.rules = [
    {
      test: /\.(svg|cur|jpg|jpeg|png|webp|gif|ani)$/,
      use: [
        {
          loader: 'file-loader', options: {
            name: () => prod ? 'images/[name].[hash:20].[ext]' : 'images/[name].[ext]',
            emitFile: true,
            esModule: false
          }
        }
      ]
    },
    {
      test: /\.(eot|otf|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'file-loader', options: {
            name: () => prod ? 'fonts/[name].[hash:20].[ext]' : 'fonts/[name].[ext]',
            emitFile: true,
            esModule: false
          }
        }
      ]
    },
    {
      test: /\.html$/, use: ['html-loader']
    },
    ...options.module.rules
  ];

  // 获取所有与样式相关的规则
  const styleRules = options.module.rules.filter(v => {
    const testMatch = ['/\\.css$/', '/\\.scss$|\\.sass$/', '/\\.less$/', '/\\.styl$/'];
    return testMatch.includes(v.test.toString());
  });

  // 删除 postcss-cli-resources 并追加其他规则
  styleRules.forEach((rule: any) => {
    const postcssLoaderIndex = rule.use.findIndex(loader => (
      loader.loader && loader.loader.indexOf('postcss-loader') !== -1
    ));
    const oldPlugins = rule.use[postcssLoaderIndex].options.plugins.call().filter(p => p.postcssPlugin !== 'postcss-cli-resources');
    rule.use[postcssLoaderIndex].options.plugins = (loader) => [...oldPlugins];

    // 插入其他规则
    const loaderCount = rule.use.length - postcssLoaderIndex;
    rule.use.splice(postcssLoaderIndex, 0, {
        loader: 'extract-loader'
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: loaderCount,
          esModule: false
        }
      }
    );
  });

  return options;
};
