import { Avatar, Button, Dropdown, Modal, Navbar } from "flowbite-react";
import { HiOutlineShoppingCart, HiGift, HiMap, HiUser } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import axios from "axios";
import Search from "./Search";


const Nav = () => {
  const { totalItems, isEmpty } = useCart();
  const [modals, setModals] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState();
  const [provinces, setProvinces] = useState([]);
  const [states, setStates] = useState([]);
  const [address2, setAddress2] = useState([]);
  const [items, setItems] = useState([]);
  const [address, setAddress] = useState("Q. 1, P. Bến Nghé, Hồ Chí Minh");
  const [users, setUsers] = useState([] as any);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    const user = stored ? JSON.parse(stored) : "";
    setUsers(user);
  }, []);

  useEffect(() => {
    try {
      axios.get("https://quocson.fatcatweb.top/listcategory").then((response) => {
        setItems(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleModals = () => {
    setModals(true);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    try {
      axios.get("https://quocson.fatcatweb.top/homepage/provinces").then((response) => {
        setProvinces(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      axios.get(`https://quocson.fatcatweb.top/homepage/provinces/${city}`).then((response) => {
        setStates(response.data ? JSON.parse(response.data.districts) : null);
      });
    } catch (error) {
      console.log(error);
    }
  }, [city]);

  const handlethisModal = () => {
    setModals(false);
    // if(user) {
    //   try {
    //     axiosHeader.patch(`/users/${id}`, {id, address1: city, address2: address2})
    //     .then(res => {
    //       console.log(res?.data)
    //     })
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  };

  return (
    <div className="sticky top-0 h-20 z-50 w-full mx-auto">
      <Navbar className="navbar" fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="/image/logotiki.png"
            className="hidden md:flex mr-3 h-10 md:h-14"
            alt="tiki Logo"
          />
        </Navbar.Brand>

        <Search />

        <div>
          <div className="flex md:order-2 justify-end items-center">
            <div className="flex items-center justify-end">
              <Button className="navbutton hidden md:flex">
                <HiGift className="text-xl" />
                <p className="text-md hidden md:block">Astra</p>
              </Button>
              <Button className="navbutton relative" href="/cart">
                <HiOutlineShoppingCart className="text-xl" />
                {isEmpty ? null : (
                  <p className="bg-red-500 rounded-full px-2 py-1 text-white absolute top-0 right-1 text-xs">
                    {totalItems}
                  </p>
                )}
              </Button>
            </div>
            {users ? (
              <Dropdown
                arrowIcon={false}
                inline={true}
                className="hidden md:flex"
                label={
                  <Avatar
                    alt={users.username}
                    img={users.image}
                    rounded={true}
                  />
                }
              >
                <Dropdown.Header>
                  {/* <p className="block text-sm">{users.username}</p> */}
                  <p className="block truncate text-sm font-medium">
                    {users.email || users.username}
                  </p>
                </Dropdown.Header>
                <Dropdown.Item className="capitalize">
                  {/* {
                    (users.role = "user" ? 
                      <Link href={"/profile"}>Profile</Link>
                   : 
                      <Link href={"/adminpage"}>Admin dashboard</Link>
                    )
                  } */}
                  <Link href={`/${users.roles}page`}>
                    {users.roles + " page"}
                  </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link href={"/signout"}>Sign out</Link>
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <Button href={"/login"} className="navbutton hidden md:flex">
                <HiUser className="text-xl" />
                <p className="font-medium text-md hidden md:block">Đăng nhập</p>
              </Button>
            )}

            <Navbar.Toggle />
          </div>
          <div className="md:flex md:items-center md:justify-end hidden">
            <HiMap className="navbutton" />
            <Link
              className="ml-2 navfont cursor-pointer text-xs"
              onClick={handleModals}
              href={""}
            >
              Giao đến: <b className="text-black text-xs">{address}</b>
            </Link>
          </div>

          <Modal
            show={modals}
            position="center"
            onClose={() => {
              setModals(false);
            }}
          >
            <Modal.Header>Địa chỉ giao hàng</Modal.Header>
            <Modal.Body>
              <div className="space-y-6 p-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Hãy chọn địa chỉ nhận hàng để được dự báo thời gian giao hàng
                  cùng phí đóng gói, vận chuyển một cách chính xác nhất.
                </p>
                <Button href="/login">
                  Đăng nhập để chọn địa chỉ giao hàng
                </Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="flex items-start mb-4 flex-col w-11/12 mx-auto">
                <div className="flex items-center mb-4">
                  <input
                    defaultChecked
                    id="default-radio-1"
                    type="radio"
                    value="Q. 1, P. Bến Nghé, Hồ Chí Minh"
                    name="default-radio"
                    onClick={() => setIsOpen(false)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                  >
                    Q. 1, P. Bến Nghé, Hồ Chí Minh
                  </label>
                </div>
                <div className="flex items-center mb-5">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value={`${city} + ${states}`}
                    name="default-radio"
                    onClick={handleClick}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
                  >
                    Chọn khu vực giao hàng khác
                  </label>
                </div>
                {isOpen ? (
                  <div className="flex items-start flex-col my-5 w-full ">
                    <div className="flex gap-3 items-center mb-4 justify-between w-full">
                      <label>Tỉnh/Thành phố:</label>
                      <select
                        value={city}
                        onChange={(e: any) => {
                          setCity(e.target.value);
                          setAddress(e.target.value);
                        }}
                        className="border rounded-lg w-2/3"
                      >
                        {provinces.map((province: any) => (
                          <option value={province.name} key={province.id}>
                            {province.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex gap-3 items-center justify-between w-full">
                      <label>Quận/Huyện:</label>
                      <select
                        className="border rounded-lg w-2/3"
                        onChange={(e: any) => {
                          setAddress2(e.target.value);
                          setAddress([
                            ...(city as any),
                            ",",
                            " ",
                            e.target.value,
                          ] as any);
                        }}
                      >
                        {states?.map((state: any) => (
                          <option value={state.name} key={state.id}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ) : null}
                <Button className="my-5 w-full" onClick={handlethisModal}>
                  GIAO ĐẾN ĐỊA CHỈ NÀY
                </Button>
              </div>
            </Modal.Footer>
          </Modal>
        </div>

        <Navbar.Collapse className="md:hidden relative">
          <div className="grid grid-cols-2 absolute z-50 bg-gray-200 w-full top-6 rounded-xl">
            {items
              ? items.map((item: any) => {
                  return (
                    <Navbar.Link href={item.path} key={item.id}
                    >
                      <div className="flex items-center ">
                        <img
                          className="h-4 w-4 rounded-lg shadow-lg mr-1"
                          src={"/" + item.image}
                          alt={item.category}
                        />
                        <p className="capitalize text-xs">{item.category}</p>
                      </div>
                    </Navbar.Link>
                  );
                })
              : null}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
