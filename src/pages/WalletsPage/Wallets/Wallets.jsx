import React from 'react';
import styles from "../Wallets/styles.module.scss";
import {AddButton} from "../../../components/MyUI/MyNavButton";
import {ReactComponent as RubIcon} from '../../../../src/assets/icons/rubIcon.svg';
import {ReactComponent as UsdIcon} from '../../../assets/icons/usdIcon.svg';
import {ReactComponent as EurIcon} from '../../../assets/icons/eurIcon.svg';
import {ReactComponent as CnyIcon} from '../../../assets/icons/cnyIcon.svg';
import {ReactComponent as TryIcon} from '../../../assets/icons/tryIcon.svg';

const wallets = [
  {
    balance: '120 000, 00',
    currency: 'RUB',
    sign: '₽',
    icon: <RubIcon/>
  },
  {
    balance: '120 000, 00',
    currency: 'USD',
    sign: '$',
    icon: <UsdIcon/>
  },
  {
    balance: '120 000, 00',
    currency: 'CNY',
    sign: '¥',
    icon: <CnyIcon/>
  },
  {
    balance: '120 000, 00',
    currency: 'EUR',
    sign: '€',
    icon: <EurIcon/>
  },
  {
    balance: '120 000, 00',
    currency: 'TRY',
    sign: '₺',
    icon: <TryIcon/>
  },

]

const Wallets = () => {
  return (
      <div>
        <p className={styles.text_500}>Мой баланс</p>

        {/*<div className={styles.add_wallet}>*/}
        {/*  <p>Добавьте кошелек</p>*/}
        {/*  <AddButton/>*/}
        {/*</div>*/}

        {wallets.map(
          ({
             currency,
             sign,
             balance,
             icon,
             status
           }) => {
            return (
              <div className={styles.card}>
                <div className={styles.country}>
                  <p className={styles.rub}>
                    {currency}
                  </p>
                  {icon}
                  {/*<RubIcon className={styles.svg_flag}/>*/}
                </div>
                <p className={styles.count}>
                  {balance} {sign}
                </p>
              </div>

            )
          }
        )
        }

      </div>


  );
};

export default Wallets;