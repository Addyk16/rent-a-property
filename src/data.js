import { CurrencyRupee, DateRange, HomeWorkOutlined, Place } from "@mui/icons-material";
import { faker } from "@faker-js/faker";

export const propertyFilterData = [
  {
    key: 1,
    label: "PROPERTY",
    icon: Place,
  },
  {
    key: 2,
    label: "LOCATION",
    icon: HomeWorkOutlined,
  },
  {
    key: 3,
    label: "AVAILABLE",
    icon: DateRange,
  },
  {
    key: 4,
    label: "RENT",
    icon: CurrencyRupee,
  },
];

export const locationData = [
  { key: 1, label: "Delhi" },
  { key: 2, label: "Gurgaon" },
  { key: 3, label: "Faridabad" },
  { key: 4, label: "Noida" },
];

export const propertyTypeData = [
  { key: 1, label: "House" },
  { key: 2, label: "Villa" },
  { key: 3, label: "Flat" },
  { key: 5, label: "Office Space" },
];

export const titleArray = [
  "Palm Harbour",
  "Las Santos",
  "Beach Drive",
  "Park View",
  "Pool Facing",
  "Golf Course",
  "Corner Property",
  "Modern Property",
];

export const descArray = [
  "3 BHK, Fully Furnished",
  "2 BHK, Semi Furnished",
  "4 BHK, Fully Furnished",
  "3 BHK, Semi Furnished",
  "2 BHK, Fully Furnished",
];

const imageUrls = [
  "https://img.freepik.com/premium-photo/3d-rendering-modern-house_62754-1884.jpg?w=1060",
  "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1657234778~exp=1657235378~hmac=d1967bc481fdbea96042e2d7cdddc5dfd00c5e74b54926542b37aa26e9d38983&w=996",
  "https://img.freepik.com/premium-photo/3d-rendering-modern-cubic-house-wood-concrete-with-pool-garden_190619-1488.jpg?w=1060",
  "https://img.freepik.com/free-photo/solar-panels-roof-modern-house-harvesting-renewable-energy-with-solar-cell-panels-exterior-design-3d-rendering_41470-3654.jpg?t=st=1657234887~exp=1657235487~hmac=4360388d61ce38611ccdba8d417d65fae0bcd94d8f95ff37a9d372bd30b492b1&w=1060",
  "https://img.freepik.com/free-photo/modern-residential-building_1268-14735.jpg?t=st=1657234967~exp=1657235567~hmac=cce8c8fe0ee21c7bc54eae0d12a737ac4b415c50fc9c2fb1a8831280d124f32f&w=996",
  "house1.jpg",
];

export const PropertyDateNew = [...Array(100)].map(() => ({
  key: faker.datatype.uuid(),
  title: faker.helpers.arrayElement(titleArray),
  desc: faker.helpers.arrayElement(descArray),
  image: faker.helpers.arrayElement(imageUrls),
  propertyType: faker.helpers.arrayElement(["House", "Villa", "Flat", "Office Space"]),
  location: faker.helpers.arrayElement(["Delhi", "Gurgaon", "Faridabad", "Noida"]),
  available: faker.date.soon(100),
  rent: faker.datatype.number({ min: 10000, max: 100000 }),
}));
