export interface EmailOption<D, R> {
  data: D[];
  success: (res: R) => void;
  fail: (err: unknown) => void;
}

export interface WriteEmailParams {
  emails: string;
}
