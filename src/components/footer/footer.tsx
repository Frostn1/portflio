const info = [
  {
    key: "Email",
    value: "hello@seandahan.com",
  },
  {
    key: "Phone",
    value: "(+972) 58-7802100",
  },
];

const Footer = () => {
  return (
    <div className={"grid place-items-center w-full"}>
      {/* <div className="flex flex-col gap-5">
        {info.map(({ key, value }) => (
          <div className="flex gap-5">
            <p className="inline-flex text-(--subtext)">{key}</p>
            <p className="inline-flex ">{value}</p>
          </div>
        ))}
      </div> */}
      <div className="self-center text-(--subtext) font-mono">
        &copy; 2024 <b>Sean Dahan</b> | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
