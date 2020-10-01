export const state = () => ({
  teamItems: [
    {
      id: 'team01',
      name: 'エンジニアリング',
      introduction: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
      icon: 'icon-engineering.png',
    },
    {
      id: 'team02',
      name: 'デザイン',
      introduction: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
      icon: 'icon-design.png',
    },
  ]
})

export const getters = {
  teamItems(state) {
    return state.teamItems;
  },
  findTeamItemById: (state) => (id) => {
    return state.teamItems.find(item => item.id === id);
  }
}
