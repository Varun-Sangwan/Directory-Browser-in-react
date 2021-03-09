export let data = [
  {
    type: "folder",
    name: "Root",
    isOpen: true,
    children: [
      {
        type: "folder",
        name: "A",
        isOpen: false,
        children: [],
      },
      {
        type: "folder",
        name: "B",
        isOpen: false,
        children: [],
      },
      {
        type: "folder",
        name: "C",
        isOpen: true,
        children: [
          {
            type: "folder",
            name: "A",
            isOpen: true,
            children: [
              {
                type: "file",
                name: "A",
                children: [],
              },
              {
                type: "file",
                name: "AB",
                children: [],
              },
            ],
          },
          {
            type: "folder",
            name: "B",
            isOpen: false,
            children: [],
          },
          {
            type: "folder",
            name: "C",
            isOpen: false,
            children: [],
          },
          {
            type: "folder",
            name: "E",
            isOpen: true,
            children: [
              {
                type: "file",
                name: "Z",
                children: [],
              },
            ],
          },
          {
            type: "file",
            name: "Y",
            children: [],
          },
        ],
      },
      {
        type: "file",
        name: "X",
        children: [],
      },
    ],
  },
];
