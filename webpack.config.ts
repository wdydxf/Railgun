/**
 * 这里自定义构建流程是为了能够处理模板中对任意位置静态资源的引用, 并对静态资源进行分类存储
 * 同时也修复了默认配置下, 样式文件引用的静态资源会被放置到根目录的问题.
 * */
import { Configuration } from 'webpack';
import { AngularCompilerPlugin } from '@ngtools/webpack';

module.exports = (options: Configuration) => {
  const prod = options.mode === 'production';

  // 禁止 AngularCompilerPlugin 直接读取模板文件, 这样才能在编译前使用 html-loader 对模板进行预处理
  const target = options.plugins.find(v => v.constructor === AngularCompilerPlugin);
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

  return options;
};
