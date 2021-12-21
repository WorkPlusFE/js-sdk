import * as core from '../core';
import { ExecOptions } from '../types/core';
import { WORKPLUS_WEBVIEW } from '../constants';
import {
  ConfigPullRefreshRes,
  ConfigPullRefreshParams,
  OnPullRefreshRes,
  StartPullRefreshRes,
  EndPullRefreshRes,
} from '../types/webview';

export type configPullRefreshOptions = ConfigPullRefreshParams &
  ExecOptions<ConfigPullRefreshRes, void>;
export type onPullRefreshOptions = ExecOptions<OnPullRefreshRes, void>;
export type startPullRefreshOptions = ExecOptions<StartPullRefreshRes, void>;
export type EndPullRefreshResOptions = ExecOptions<EndPullRefreshRes, void>;
/**
 * 下拉刷新-配置
 * @param {configPullRefreshOptions} [options]
 * @module webview
 * @returns {ConfigPullRefreshRes}
 */
export function configPullRefresh(
  options: configPullRefreshOptions,
): Promise<ConfigPullRefreshRes> {
  return core.exec<ConfigPullRefreshParams, ConfigPullRefreshRes, void>(
    WORKPLUS_WEBVIEW,
    'configPullRefresh',
    [options],
    options?.success,
    options?.fail,
    false,
  );
}

/**
 * 下拉刷新-监听
 * @param {onPullRefreshOptions} [options]
 * @module webview
 * @returns {OnPullRefreshRes}
 */
export function onPullRefresh(options: onPullRefreshOptions): Promise<OnPullRefreshRes> {
  return core.exec<void, OnPullRefreshRes, void>(
    WORKPLUS_WEBVIEW,
    'onPullRefresh',
    [],
    options?.success,
    options?.fail,
    false,
  );
}

/**
 * 下拉刷新-主动触发
 * @param {startPullRefreshOptions} [options]
 * @module webview
 * @returns {StartPullRefreshRes}
 */
export function startPullRefresh(options: startPullRefreshOptions): Promise<StartPullRefreshRes> {
  return core.exec<void, StartPullRefreshRes, void>(
    WORKPLUS_WEBVIEW,
    'startPullRefresh',
    [],
    options?.success,
    options?.fail,
    false,
  );
}

/**
 * 下拉刷新-停止
 * @param {EndPullRefreshResOptions} [options]
 * @module webview
 * @returns {EndPullRefreshRes}
 */
export function endPullRefresh(options: EndPullRefreshResOptions): Promise<EndPullRefreshRes> {
  return core.exec<void, EndPullRefreshRes, void>(
    WORKPLUS_WEBVIEW,
    'endPullRefresh',
    [],
    options?.success,
    options?.fail,
    false,
  );
}
