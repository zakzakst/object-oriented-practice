export const state = () => ({
  memberItems: [
    {
      id: 'user01',
      name: '山田太郎',
      tel: '000-0000-0001',
      mail: 'tyamada@mail.com',
      messenger: '@yamadataro001',
      onlineStatus: true,
      teamId: 'team01',
      teamName: 'エンジニアリング',
      teamIcon: 'icon-engineering.png',
    },
    {
      id: 'user02',
      name: '山田太郎',
      tel: '000-0000-0002',
      mail: 'tyamada@mail.com',
      messenger: '@yamadataro002',
      onlineStatus: true,
      teamId: 'team02',
      teamName: 'デザイン',
      teamIcon: 'icon-engineering.png',
    },
    {
      id: 'user03',
      name: '佐藤二朗',
      tel: '000-0000-0002',
      mail: 'tyamada@mail.com',
      messenger: '@yamadataro002',
      onlineStatus: true,
      teamId: 'team02',
      teamName: 'デザイン',
      teamIcon: 'icon-engineering.png',
    },
  ]
})

export const getters = {
  memberItems(state) {
    return state.memberItems;
  },
  findMemberItemById: (state) => (id) => {
    return state.memberItems.find(item => item.id === id);
  },
  filterMemberItemByTeamId: (state) => (teamId) => {
    // teamIdの指定がない場合はメンバー全体を返す
    if (!teamId) return state.memberItems;
    return state.memberItems.filter(item => item.teamId === teamId);
  }
}
