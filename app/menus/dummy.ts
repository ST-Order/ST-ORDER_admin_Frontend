export const DUMMY_DATA = {
  menus: [
    {
      menuId: 1,
      menuName: "삼겹덮밥",
      isBest: true,
      isPopular: true,
      menuImage: "https://example.com/menu1.png",
      description: "맛난 삼겹살과 쌈장으로 만든 덮밥",
      price: 5000,
      isSoldOut: false,
      isAvailable: true,
      options: [
        {
          optionId: 101,
          optionName: "밥 추가",
          optionPrice: 500,
          optionAvailable: true,
        },
        {
          optionId: 102,
          optionName: "곱빼기",
          optionPrice: 1000,
          optionAvailable: true,
        },
      ],
    },
    {
      menuId: 2,
      menuName: "날치알 덮밥",
      isBest: false,
      isPopular: true,
      menuImage: "https://example.com/menu2.png",
      description: "입안에서 톡톡 터지는 맛이 일품인 덮밥",
      price: 5000,
      isSoldOut: false,
      isAvailable: true,
      options: [
        {
          optionId: 103,
          optionName: "밥 추가",
          optionPrice: 500,
          optionAvailable: true,
        },
      ],
    },
    {
      menuId: 3,
      menuName: "불고기 덮밥",
      isBest: true,
      isPopular: true,
      menuImage: "https://example.com/menu3.png",
      description: "달콤한 불고기와 신선한 채소가 어우러진 덮밥",
      price: 6000,
      isSoldOut: false,
      isAvailable: true,
      options: [
        {
          optionId: 104,
          optionName: "밥 추가",
          optionPrice: 500,
          optionAvailable: true,
        },
      ],
    },
    {
      menuId: 4,
      menuName: "참치마요 덮밥",
      isBest: false,
      isPopular: true,
      menuImage: "https://example.com/menu4.png",
      description: "부드러운 참치와 마요네즈의 조화가 일품인 덮밥",
      price: 5500,
      isSoldOut: false,
      isAvailable: true,
      options: [
        {
          optionId: 105,
          optionName: "밥 추가",
          optionPrice: 500,
          optionAvailable: true,
        },
      ],
    },
    {
      menuId: 5,
      menuName: "김치 덮밥",
      isBest: true,
      isPopular: false,
      menuImage: "https://example.com/menu5.png",
      description: "매콤한 김치와 함께하는 덮밥",
      price: 4500,
      isSoldOut: false,
      isAvailable: true,
      options: [
        {
          optionId: 106,
          optionName: "밥 추가",
          optionPrice: 500,
          optionAvailable: true,
        },
      ],
    },
    {
      menuId: 6,
      menuName: "치킨 덮밥",
      isBest: false,
      isPopular: true,
      menuImage: "https://example.com/menu6.png",
      description: "바삭한 치킨과 신선한 채소가 어우러진 덮밥",
      price: 6500,
      isSoldOut: false,
      isAvailable: true,
      options: [
        {
          optionId: 107,
          optionName: "밥 추가",
          optionPrice: 500,
          optionAvailable: true,
        },
        {
          optionId: 108,
          optionName: "소스 추가",
          optionPrice: 300,
          optionAvailable: true,
        },
      ],
    },
    {
      menuId: 7,
      menuName: "오징어 덮밥",
      isBest: false,
      isPopular: false,
      menuImage: "https://example.com/menu7.png",
      description: "신선한 오징어와 매콤한 양념이 어우러진 덮밥",
      price: 7000,
      isSoldOut: true,
      isAvailable: false,
      options: [],
    },
  ],
};
