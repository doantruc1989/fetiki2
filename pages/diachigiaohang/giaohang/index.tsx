import axios from "axios";
import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import HeadSeo from "../../components/HeadSeo";

const Index = () => {
  const [users, setUsers] = useState([] as any);
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState();
  const [provinces, setProvinces] = useState([]);
  const [states, setStates] = useState([]);
  const [address, setAddress] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address2, setAddress2] = useState("");
  const [newAdd, setNewAdd] = useState("");
  const [disable, setDisable] = useState(false);
  const [disable2, setDisable2] =useState(false);
  const router = useRouter();

  useEffect(() => {
    setDisable(users.phone !== "0" && users.address !== "x");
  }, [users]);

  useEffect(() => {
    setDisable2(phone !== "" && city !== "" && address2 !== "" && newAdd !== "")
  },[phone, city, address2, newAdd])

  const handleClick = () => {
    try {
      axios
        .get("http://localhost:3006/homepage/provinces")
        .then((response) => {
          setProvinces(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const prop = {
    title: "tiki delivery đăng nhập địa chỉ giao hàng",
    keywords: "delivery tiki đăng nhập địa chỉ giao hàng",
    description: "làm trang đăng nhập địa chỉ giao hàng delivery đơn giản easy",
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      const user = stored ? JSON.parse(stored) : "";
      const id = user.id;
      const config = {
        baseURL: "http://localhost:3006/",
        headers: { Authorization: "Bearer " + user.tokens.accessToken },
      };

      const axiosHeader = axios.create(config);
      axiosHeader.get(`/users/${id}`).then((res) => {
        setUsers(res?.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(users);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:3006/homepage/provinces/${city}`)
        .then((response) => {
          setStates(response.data ? JSON.parse(response.data.districts) : null);
        });
    } catch (error) {
      console.log(error);
    }
  }, [city]);

  return (
    <div className="bg-[#F5F5FA] h-screen">
      <HeadSeo prop={prop} />
      <div className="sticky top-0 z-50 w-full mx-auto">
        <nav className="navbar flex items-center justify-between py-5 h-fit px-4">
          <Link href="/">
            <img
              src="/image/logotiki.png"
              className="h-10 md:h-14"
              alt="tiki Logo"
            />
          </Link>

          <ol className="flex items-center w-1/2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <Link href={"/diachigiaohang"}>
                <p className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                  Đăng{" "}
                  <span className="hidden sm:inline-flex sm:ml-2">nhập</span>
                </p>
              </Link>
            </li>
            <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <p className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Giao <span className="hidden sm:inline-flex sm:ml-2">hàng</span>
              </p>
            </li>
            <li className="flex items-center">
              <p className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
                <span className="mr-2">3</span>
                Thanh{" "}
                <span className="hidden sm:inline-flex sm:ml-2">toán</span>
              </p>
            </li>
          </ol>

          <div>
            <img src="/image/hotline.png" alt="tiki Logo" />
          </div>
        </nav>
      </div>
      <div className="pt-6">
        <div className="flex flex-col items-start w-11/12 md:w-3/5 mx-auto">
          <div className="w-full mb-10">
            <h2 className="font-medium mb-3">2. Địa chỉ giao hàng mặc định</h2>
            <div className="flex flex-col items-center">
              <p className="font-medium">{users.username}</p>
              <p>{users.phone}</p>
              <p>{users.address}</p>
              <div className="my-2 flex justify-center items-center gap-10 w-full">
                <Label htmlFor="diachi" color="info" value="Địa chỉ" />
                <TextInput
                  className="w-2/3"
                  value={address}
                  onChange={(e: any) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="mb-2 flex items-center justify-center w-full gap-10 mt-4">
                <Button
                  disabled={!disable}
                  className="w-2/3 md:w-1/3"
                  onClick={() => {
                    return axios
                      .patch(
                        `http://localhost:3006/users/${users.id}`,
                        {
                          address: `${users.address}, ${address}`,
                        }
                      )
                      .then((res: any) => {
                        console.log(res.data);
                        router.push("/diachigiaohang/giaohang/thanhtoan");
                      });
                  }}
                >
                  Giao đến địa chỉ này
                </Button>
              </div>
            </div>
          </div>
          <h3>
            Bạn muốn giao hàng đến địa chỉ khác?{" "}
            <button
              className="text-blue-800"
              onClick={() => {
                setIsOpen(!isOpen);
                handleClick();
              }}
            >
              Thêm địa chỉ giao hàng mới
            </button>{" "}
          </h3>
          {isOpen && (
          <div className="flex flex-col w-full mx-auto mt-5 bg-[#F5F5FA]">
            <div className="mb-2 flex items-center justify-between md:justify-end gap-10">
              <Label htmlFor="name" color="info" value="Họ tên" />
              <TextInput
                id="name"
                value={username}
                placeholder={users.username}
                required={true}
                color="info"
                className="w-2/3"
                onChange={(e: any) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-2 flex items-center justify-between md:justify-end gap-10">
              <Label htmlFor="phone" color="info" value="Điện thoại" />
              <TextInput
                id="phone"
                value={phone}
                placeholder={users.phone}
                required={true}
                color="info"
                className="w-2/3"
                onChange={(e: any) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-2 flex items-center justify-between md:justify-end gap-10">
              <Label htmlFor="state" color="info" value="Tỉnh/TP" />
              <Select
                className="w-2/3"
                id="state"
                color="info"
                required={true}
                value={city}
                onChange={(e: any) => setCity(e.target.value)}
              >
                {provinces.map((province: any) => (
                  <option value={province.name} key={province.id}>
                    {province.name}
                  </option>
                ))}
              </Select>
            </div>
            <div className="mb-2 flex items-center justify-between md:justify-end gap-10">
              <Label htmlFor="district" color="info" value="Quận/Huyện" />
              <Select
                className="w-2/3"
                id="district"
                color="info"
                required={true}
                onChange={(e: any) => setAddress2(e.target.value)}
              >
                {states
                  ? states.map((state: any) => (
                      <option value={state.name} key={state.id}>
                        {state.name}
                      </option>
                    ))
                  : null}
              </Select>
            </div>
            <div className="mb-2 flex items-center justify-between md:justify-end gap-10">
              <Label htmlFor="diachi" color="info" value="Địa chỉ" />
              <TextInput
                id="diachi"
                value={newAdd}
                placeholder="địa chỉ cụ thể"
                required={true}
                color="info"
                className="w-2/3"
                onChange={(e: any) => setNewAdd(e.target.value)}
              />
            </div>
            <div className="mb-2 flex items-center justify-center w-full gap-10 mt-4">
              <Button
                className="w-2/3 md:w-1/3"
                disabled={!disable2}
                onClick={() => {
                  return axios
                    .patch(`http://localhost:3006/users/${users.id}`, {
                      username: username || users.username,
                      phone: phone || users.phone,
                      address: `${city}, ${address2}, ${newAdd}`,
                    })
                    .then((res: any) => {
                      console.log(res.data);
                      router.push("/diachigiaohang/giaohang/thanhtoan");
                    });
                }}
              >
                Giao đến địa chỉ này
              </Button>
            </div>
          </div>
        )}
        </div>
        
      </div>
      </div>
  );
};

export default Index;
