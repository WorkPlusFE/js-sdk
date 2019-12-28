import * as core from '../core';
import { WORKPLUS_FILE } from "../constants";
import { FileOptions, EmailAttachmentDirRes } from '../types/file';


export default function getEmailAttachmentDir(options?: FileOptions<[], EmailAttachmentDirRes>): Promise<EmailAttachmentDirRes> {
  return core.exec<[], EmailAttachmentDirRes, unknown>(
    WORKPLUS_FILE,
    'getEmailAttachmentDir',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}
