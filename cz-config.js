module.exports = {
  types: [
    { value: '✨ Feat', name: '✨ Feat:\t새로운 기능 추가' },
    {
      value: '🔥 Remove',
      name: '🔥 Remove:\t코드, 파일 삭제',
    },
    { value: '🐛 Modify', name: '🐛 Fix:\t코드 수정' },
    { value: '📝 Docs', name: '📝 Docs:\t문서, 주석 수정' },
    {
      value: '💄 Style',
      name: '💄 Style:\t코드 스타일, 포맷팅 정정',
    },
    {
      value: '🤖 Refactor',
      name: '🤖 Refactor:\t코드 리팩터링',
    },
    {
      value: '🔧 Chore',
      name: '🔧 Chore:\t기타 변경사항(라이브러리 추가/수정..)ㄴ',
    },
  ],
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body'],
  subjectLimit: 100,
};
