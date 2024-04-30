const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          name: "Michi Cat",
          phone: "123-456-7890",
          address: "123 Main St, Anytown",
          email: "michicat@example.com",
          profilePhoto: require("../../img/me-on-programation.jpg"),
        },
        {
          name: "NoMichi Dog",
          phone: "987-654-3210",
          address: "456 Elm St, Othertown",
          email: "nomichidog@example.com",
          profilePhoto: require("../../img/me-on-vacation.jpg"),
        },
      ],
      images: {
        meOnProgramation: require("../../img/me-on-programation.jpg"),
        meOnVacation: require("../../img/me-on-vacation.jpg"),
      },
    },
    actions: {
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        // fetch().then().then(data => setStore({ "foo": data.bar }))
      },
      changeColor: (index, color) => {
        const store = getStore();
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });
        setStore({ demo: demo });
      },
      addDemoItem: (name, phone, address, email, profilePhoto) => {
        const store = getStore();
        const newContact = {
          name: name,
          phone: phone,
          address: address,
          email: email,
          profilePhoto: profilePhoto,
        };
        const updatedDemo = [...store.demo, newContact];
        setStore({ demo: updatedDemo });
      },
      deleteDemoItem: (index) => {
        const store = getStore();
        const updatedDemo = store.demo.filter((item, i) => i !== index);
        setStore({ demo: updatedDemo });
      },
    },
  };
};

export default getState;
