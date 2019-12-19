import * as fs from 'fs';
import { findAllExtension } from './utils';

const rootPath = process.cwd();
const modulesPath = rootPath + '/modules';
const mdRegExp = /\.md$/;

const cleanDocs = (docPath = rootPath + '/docs/') => {
  fs.readdirSync(docPath).forEach(path => {
    const curPath = docPath + path;
    if (path === '.vuepress') return;
    const stat = fs.statSync(curPath);
    if (stat.isDirectory()) {
      clean(curPath + '/');
      fs.rmdirSync(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  });
};

const copyFileToDocs = () => {
  const docPath = rootPath + '/docs/';
  const REMDME_MD = 'README.md';
  fs.copyFileSync(`${process.cwd()}/${REMDME_MD}`, docPath + REMDME_MD);
  findAllExtension(modulesPath, mdRegExp, filename => {
    const pathTree =
      filename
        .split(modulesPath)
        .pop()
        ?.split('/') ?? [];

    let targetPath = docPath;

    pathTree.forEach((dir, i) => {
      if (dir && !mdRegExp.test(dir)) {
        targetPath = targetPath + dir + '/';
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath);
        }
      }
    });
    fs.copyFileSync(filename, targetPath + pathTree.pop());
  });
};

cleanDocs();
copyFileToDocs();
