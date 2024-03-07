import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  return <ul>{list && list.length > 0 && list.map((item, index) => <MenuItem key={index} item={item} />)}</ul>;
}

export default MenuList;
