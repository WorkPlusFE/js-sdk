import { ExecOptions } from '../types/core';
import { PlayVideoRes, PlayVideoParams } from '../types/video';
export declare type Options = PlayVideoParams & ExecOptions<PlayVideoRes, void>;
/**
 * @description 视频录制
 * @param {Options} options
 * @module video
 * @returns {PlayVideoRes}
 */
export default function playVideo(options: Options): Promise<PlayVideoRes>;
