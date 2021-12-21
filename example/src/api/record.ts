// 音频
export default {
  title: '音频',
  module: 'record',
  active: false,
  apis: [
    {
      title: '语音录制',
      description: '语音录制',
      action: 'voiceRecord',
      params: {},
    },
    {
      title: '音频转mp3格式',
      description: '音频转mp3格式',
      action: 'translateAudio',
      params: {
        file_path: '',
      },
    },
  ],
};
