// 视频

export default {
  title: '视频',
  module: 'video',
  active: false,
  apis: [
    {
      title: '视频录制',
      description: '视频录制',
      action: 'startVideoRecoder',
      params: {
        duration: '60.0',
        quality: '0',
        sync_system_album: true,
      },
    },
    {
      title: '播放视频',
      description: '播放视频',
      action: 'playVideo',
      params: { url: 'https://23550369.s21v.faiusr.com/58/2/ABUIABA6GAAggb-q-wUokKWtuwE.mp4' },
    },
  ],
};
