export default {
  colors: ['red', 'orange', 'yellow', 'olive', 'green', 'tegal', 'blue', 'violet', 'purple', 'pink', 'brown'],
  skills: ['Javascript', 'React', 'Rreact-Native', 'Ionic', 'AngularJS', 'CSS', 'HTML', 'Node.js', 'Java'],
  grades: {
    labels: ['Javascript', 'Java', 'Node.js', 'React', 'React-Native', 'AngularJS', 'CSS'],
    datasets: [
      {
        data: [10, 6, 8, 8, 7, 9, 8],
      },
    ],
    pointRadius: 0,
  },
  projects: [
    {
      id: 'encored',
      items: [
        {
          name: '에너톡 앱 개발',
          skills: 'Ionic, AngularJS',
          desc: [
            'Ionic을 활용한 하이브리드 앱 개발',
            '실시간 전기 사용량 모니터링 앱',
            'D3.js를 사용한 시각화 컴포넌트 개발',
            'App Store: https://itunes.apple.com/kr/app/%EC%97%90%EB%84%88%ED%86%A1-%ED%99%88/id1024660780?mt=8',
            'Google Play: https://play.google.com/store/apps/details?id=com.ionicframework.enertalkhome874425&hl=ko',
          ],
        },
        {
          name: '에너톡 빌딩',
          skills: 'AngularJS, Node.js',
          desc: [
            'AngularJS 기반의 front-end 개발',
            '자사 api 서버 연동을 위한 Nod.js + express 웹 서버 개발',
            'Highcharts를 사용한 시각화 컴포넌트 개발',
            'url: https://building.enertalk.com',
          ],
        },
        {
          name: '일본 서비스용 에너톡 개발',
          skills: 'React-Native',
          desc: [
            'Prject Manager',
            'React-Native를 사용하여 하이브리드 앱 개발',
            'D3.js를 사용한 시각화 컴포넌트 개발',
          ],
        },
      ],
    },
    {
      id: 'lutes',
      items: [
        {
          name: '업무평가 통계 및 리포팅 시스템 개발',
          skills: 'Java, Spring, Ms-sql, Ibatis, Jquery',
          desc: [
            '웹기반 업무평가 시스템 개발',
            '웹 페이지 개발 담당',
          ],
        },
        {
          name: '보안 관제 종합 관리시스템 개발',
          skills: 'Java, Spring, Oracle, Ibatis, Jquery',
          desc: [
            '대용량 로그 분석 시스템',
            '로그 분석 엔진과 모니터링 페이지로 구성 되어 있으면 모니터링 페이지 개발을 담당',
          ],
        },
        {
          name: '학사 관리 자동화 도구 개발',
          skills: 'Java, Spring, AngularJs, Jqplot',
          desc: [
            '수강생 선정 시스템과 수강 종료후 설문 조사 시스템으로 구성',
            '설문조사 시스템 개발을 담당',
            '구글 설문조사를 모티브로한 자유도 높은 설문 조사 시스템 구현',
            '설문조사에 필요한 DB 설계',
          ],
        },
      ],
    },
    {
      id: 'etc',
      items: [
        {
          name: '개인 프로필 페이지',
          skills: 'React, Firebase',
          desc: [
            '개인 프로필 및 커리어 관리 페이지',
            'Github page를 통한 호스팅',
            'React 기반의 프로트엔드 개발',
            '서버사이드는 Firebase를 활용(개발중)',
            'https://koansang.github.io',
          ],
        },
      ],
    },
  ],
};
