const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const uppercamelize = require('uppercamelcase');

const tips = '// This file is auto gererated by scripts/create-api.js';

const apiModule = uppercamelize(process.argv[2].slice(2))
const apiMethod = process.argv[3].slice(2)
const apiOption = `${ apiModule }Option`
const apiKey = `WORKPLUS_${apiModule.toUpperCase()}`
const apiParams = process.argv[4] ? `${uppercamelize(apiMethod)}Params` : 'void'
const apiRes = process.argv[5] ? `${uppercamelize(apiMethod)}Res` : 'void'

function buildAPI() {

  const content = `${ tips }
import * as core from '../core';
import { ${apiOption} } from '../types/${ apiModule.toLowerCase() }';
import { ${apiKey} } from '../constants'

export default function ${apiMethod}(
  options?: ${apiOption}<${apiParams}, ${apiRes}>,
): Promise<${apiRes}> {
  return core.exec<${apiParams}, ${apiRes}, unknown>(
    ${apiKey},
    '${apiMethod}',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
`;

  fsExtra.writeFileSync(path.join(__dirname, `../modules/${apiModule}/${apiMethod}.ts`), content);
}

buildAPI();

function getApi () {
  const excludes = [
    'index'
  ];
  let apis = fs.readdirSync(path.resolve(__dirname, `../modules/${apiModule.toLowerCase()}`));
  apis = apis.map(api => api.substring(0, api.length - 3))
  return apis.filter(apiName => excludes.indexOf(apiName) === -1);
}

function buildApiEntry () {
  const apiList = getApi()
  const importList = apiList.map(api => `import ${api} from './${api}';`)
  const exportList = apiList.map(api => `${api}`);

  const content = `${ tips }
${importList.join('\n')}

export default {
  ${exportList.join(',\n  ')}
}
`;

  fsExtra.writeFileSync(path.join(__dirname, `../modules/${apiModule}/index.ts`), content);
}

buildApiEntry();
