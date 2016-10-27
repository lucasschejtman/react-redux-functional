export default {
  module: {
    identifier: "",
    version: "",
    props: {}
  },
  modules: [
    {
      "identifier": "card",
      "name": "Card",
      "version": "1",
      filename: 'ListComponent.js',
      "props": {
        header: {
          title: "Lucas Schejtman",
          subtitle: "LSchejtman",
          avatar: "https://avatars2.githubusercontent.com/u/4985003?v=3&s=466"
        },
        media: {
          title: "Image title",
          subtitle: "Image subtitle",
          image: "https://avatars2.githubusercontent.com/u/4985003?v=3&s=466"
        }
      }
    },
    {
      "identifier": "list",
      "name": "Basic ListComponent (ul + li)",
      "version": "1",
      "props": {
        children: [
          'value 1',
          'value 2',
          'value 3'
        ]
      }
    }
  ]
};
