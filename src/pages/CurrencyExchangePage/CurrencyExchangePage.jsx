import React, {useState} from 'react';
import {NavSidebar} from "../../components/NavSidebar";
import {ProfileSidebar} from "../../components/ProfileSidebar";
import styles from "../CurrencyExchangePage/styles.module.scss";
import {MyInput} from "../../components/MyUI/MyInput";
import {MySelector, WalletSelector} from "../../components/MyUI/MySelector";
import {MyButton} from "../../components/MyUI/MyButton";
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import {currencies} from "../WalletsPage/WalletsPage";




const CurrencyExchangePage = () => {

  const allUsers = JSON.parse(localStorage.getItem("allUsers"))
// console.log('===>AllUsers', allUsers)

  const authorized = JSON.parse(localStorage.getItem("authorized"))
// console.log('===>authorized', authorized)

  const loggedUser = allUsers.find(user => authorized === user.id) || null
  // console.log('===>loggedUser', loggedUser)

  const [wallets, setWallets] = useState(loggedUser.wallets)
  console.log('===>wallets', wallets)


  const [form, setForm] = useState({
    give: '',
    get: '0',
    // currency: '',
    // sign: '',
    // icon: null

  })
  console.log('===>form', form)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }



  return (
    <div className={styles.page_layout}>
      <NavSidebar/>
      <section className={styles.main}>
        <div className={styles.main__nav}>
          <p className={styles.main__title}>Обмен валют</p>
        </div>

        <div className={styles.profile_info}>
          <p className={styles.profile_title}>Укажите кошелек, сумму и валюту для обмена</p>

          <div className={styles.profile_inputs}>
            <MyInput
              label="Отдаю"
              sx={{width: 164}}
              name="give"
              onChange={handleChange}
            />

            <WalletSelector
              name="currency"
              wallets={wallets}
              changed={form.currency}
              onChange={handleChange}
            />

          </div>
          <div className={styles.profile_inputs}>
            <MyInput
              label="Получаю"
              sx={{width: 164}}
              name="get"
              onChange={handleChange}
            />
            <MySelector
              name="currency"
              currencies={currencies}
              changed={form.currency}
              onChange={handleChange}
            />
          </div>

          <MyButton
            size="largeWithIcon"
            variant="contained"
            endIcon={<CachedRoundedIcon/>}
          >Обменять
          </MyButton>

        </div>

      </section>
      <ProfileSidebar/>
    </div>
  );
};

export default CurrencyExchangePage;





















// const [give, setGive] = useState<CurrencyType>();
// const [get, setGet] = useState<CurrencyType>();
// const [openModal, setOpenModal] = useState<boolean>(false);
// const [giveValue, setGiveValue] = useState<number>();
// const [getValue, setGetValue] = useState<number>();
// const [isDisabled, setIsDisabled] = useState<boolean>(true);
// const [isDisabledSelect, setIsDisabledSelect] = useState<boolean>(true)
// const {FetchExchangeRates} = useActions();
// const exchangeRates: exchangeRates = useTypedSelector((state) => state.exchangeRates);
// const {users} = useTypedSelector((state) => state.user);
// const {wallets} = useTypedSelector((state) => state.wallets);
// const {FetchWallets, FetchUser, transactionUser, updateWalletUser} = useActions();
// const Data = new Date();
// const Hour = Data.getHours();
// const Minutes = Data.getMinutes();
//
// const giveWallets = wallets.filter(wallet => wallet.currency !== get)
//
// const getWallets = wallets.filter(wallet => wallet.currency !== give)
//
// useEffect(() => {
//   giveWallets.length && getWallets.length ? setIsDisabledSelect(false) : setIsDisabledSelect(true)
//
// }, [])
//
// useEffect(() => {
//   if (get === give && get?.length && give?.length) {
//   } else {
//   }
// }, [get, give]);
// const addTransaction = () => {
//   const refreshWalletSum = wallets.map((item) => {
//     if (item.currency === give) {
//       return {
//         ...item,
//         sum: item.sum - Number(giveValue),
//       };
//     }
//     if (item.currency === get) {
//       return {
//         ...item,
//         sum: item.sum + +Number(getValue),
//       };
//     }
//     return item;
//   });
//
//   setOpenModal(true);
//   setIsDisabled(true);
//   updateWalletUser([...refreshWalletSum])
//   setTimeout(() => {
//     FetchWallets()
//   }, 100)
//
//   const newTransaction: TransactionType[] = [
//     ...users[0].transaction,
//     {
//       get,
//       Hour,
//       Minutes,
//       give,
//       giveValue,
//       getValue,
//     },
//   ]
//   transactionUser(newTransaction)
//   setTimeout(() => {
//     FetchUser()
//   }, 100)
//   setGiveValue(0);
// };
//
// useEffect(() => {
//   FetchExchangeRates()
// }, []);
//
// useEffect(() => {
//   const walletGive = wallets?.filter(
//     (wallet) => wallet.currency === give && wallet
//   );
//   walletGive.length &&
//   (Number(giveValue) > walletGive[0].sum ||
//   Boolean(!get) ||
//   Boolean(!give) ||
//   Boolean(!giveValue)
//     ? setIsDisabled(true)
//     : setIsDisabled(false));
//
//   exchangeRates.map((input: { currencyName: CurrencyType; rubleRatio: string | null; }) => {
//     walletGive.length &&
//     walletGive[0].currency === input.currencyName &&
//     exchangeRates?.map((output: { currencyName: CurrencyType; rubleRatio: string | null; }) => {
//       get === output.currencyName &&
//       setGetValue(
//         Number(
//           (
//             (Number(input.rubleRatio) * Number(giveValue)) /
//             Number(output.rubleRatio)
//           ).toFixed(2)
//         )
//       );
//     });
//   });
// }, [giveValue, getValue, get, give, isDisabled]);
//
// return (
//   <main className={classes.main}>
//     <NavBar/>
//     <section className={classes.main__wrapper}>
//       <div className={classes.main__wrapper__title}>
//         <h1 className={classes.main__wrapper__title_text}>Обмен валют</h1>
//       </div>
//       <div className={classes.main__wrapper__content}>
//         <div className={classes.main__wrapper__content__title__info}>
//           <p>Укажите кошелек, сумму и валюту для обмена</p>
//         </div>
//         <div className={classes.main__wrapper__content__exchange}>
//           <Input
//             placeholder="Отдаю"
//             type="number"
//             className={classes.main__wrapper__content__exchange__input}
//             onChange={(e) => setGiveValue(e.target.valueAsNumber)}
//             value={giveValue}
//           />
//           {wallets ? (
//             <Select
//               handleChangeSelect={(event) => setGive(event.target.value as CurrencyType)}
//               selectValue={give}
//               minWidth="21rem"
//               name="Выберите кошелек"
//               array={giveWallets}
//               disabled={isDisabledSelect}
//             />
//           ) : (
//             <h1>LoAdInG...</h1>
//           )}
//         </div>
//         <div className={classes.main__wrapper__content__exchange}>
//           <Input
//             placeholder="Получаю"
//             type="number"
//             className={classes.main__wrapper__content__exchange__input}
//             onChange={(e) => setGetValue(e.target.valueAsNumber)}
//             value={getValue}
//             readOnly={true}
//           />
//           {wallets ? (
//             <Select
//               handleChangeSelect={(event) =>
//                 setGet(event.target.value as CurrencyType)
//               }
//               selectValue={get}
//               minWidth="21rem"
//               name="Выберите кошелек"
//               array={getWallets}
//               disabled={isDisabledSelect}
//
//             />
//           ) : (
//             <h1>LoAdInG...</h1>
//           )}
//         </div>
//         <div className={classes.main__wrapper__content__exchange}>
//
//           <ButtonMui
//             text="Обменять"
//             icon={exchange}
//             bc="#363636"
//             padding="16px"
//             gap="8px"
//             coloring="#FFFFFF"
//             fontWeight="600"
//             fontSize="16px"
//             hb="#363636"
//             disabled={isDisabled}
//             direction="row-reverse"
//             onClick={addTransaction}
//           />
//
//         </div>
//       </div>
//     </section>
//     <ProfileBar/>
//     {openModal && openModal && (
//       <Modal
//         setOpenModal={setOpenModal}
//         image={exchangeRatesIcon}
//         textMain="Успешно"
//         textBottom="Вы успешно обменяли валюту по актуальному курсу"
//       />
//     )}
//   </main>
// );
// };