import { getData } from '../modules/storage/getData';
import startVideoRecoder from '../modules/video/startVideoRecoder';
import playVideo from '../modules/video/playVideo';
import translateAudio from '../modules/record/translateAudio';
import generateQrcode from '../modules/util/generateQrcode';
import generateBarcode from '../modules/util/generateBarcode';
import config from '../modules/config/config';
import checkApi from '../modules/config/checkApi';
import { request, authRequest } from '../modules/network/request';
import assembleAuthUrl from '../modules/network/assembleAuthUrl';
import { configPullRefresh } from '../modules/webview/refresh';
import { showModal } from '../modules/dialog/modal';
import { showActionSheet } from '../modules/dialog/actionSheet';
import { showInputView } from '../modules/dialog/inputView';
import { popNotification } from '../modules/dialog/popNotification';
import * as core from '../modules/core';

jest.mock('../modules/core', () => ({
  exec: jest.fn(),
}));

const mockedExec = core.exec as jest.Mock;

describe('callback options passed to core.exec', () => {
  beforeEach(() => {
    mockedExec.mockClear();
  });

  it('storage.getData forwards callbacks and omits them from native args', () => {
    const success = jest.fn();
    const fail = jest.fn();

    getData({
      app_id: 'cus_oa_wf',
      key: 'test',
      success,
      fail,
    });

    expect(mockedExec).toHaveBeenCalledWith(
      'WorkPlus_DATA',
      'getData',
      [{ app_id: 'cus_oa_wf', key: 'test' }],
      success,
      fail,
    );
  });

  it.each([
    [
      'video.startVideoRecoder',
      startVideoRecoder,
      { duration: 10, quality: '1', sync_system_album: false, front: false },
    ],
    ['video.playVideo', playVideo, { url: 'https://example.com/video.mp4' }],
    ['record.translateAudio', translateAudio, { filePath: '/tmp/audio.wav' }],
    ['util.generateQrcode', generateQrcode, { content: 'hello', width: 200, height: 200 }],
    ['util.generateBarcode', generateBarcode, { content: 'hello', width: 200, height: 80 }],
    ['config.config', config, { appId: 'app', timestamp: '1', nonceStr: 'n', signature: 's' }],
    ['config.checkApi', checkApi, { service: 'WorkPlus_DATA', method: 'getData' }],
    ['network.request', request, { url: 'https://example.com', method: 'GET' }],
    ['network.authRequest', authRequest, { url: 'https://example.com', method: 'GET' }],
    ['network.assembleAuthUrl', assembleAuthUrl, { urls: ['https://example.com'] }],
    ['webview.configPullRefresh', configPullRefresh, { enable: true }],
    ['dialog.showModal', showModal, { title: 'Confirm' }],
    ['dialog.showActionSheet', showActionSheet, { item_list: ['A'] }],
    ['dialog.showInputView', showInputView, { title: 'Input' }],
    ['dialog.popNotification', popNotification, { title: 'Notice' }],
  ])('%s omits callbacks from native args', (_name, api, params) => {
    const success = jest.fn();
    const fail = jest.fn();

    (api as Function)({
      ...params,
      success,
      fail,
    });

    const call = mockedExec.mock.calls[0];
    expect(call[2][0]).toEqual(params);
    expect(call[2][0]).not.toHaveProperty('success');
    expect(call[2][0]).not.toHaveProperty('fail');
    expect(call[3]).toBe(success);
    expect(call[4]).toBe(fail);
  });
});
