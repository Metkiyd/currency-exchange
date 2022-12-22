import React from 'react';
import styles from "../Transactions/styles.module.scss";
import {NavButton} from "../../../components/MyUI/MyNavButton";
import CachedRoundedIcon from "@mui/icons-material/CachedRounded";

const recentTransactions = [
  {
    outcome: '123,02',
    outCur: 'USD',
    income: '10000',
    inCur: 'RUB',
    status: 'success',
    text: 'Успешно'

  },
  {
    outcome: '12,02',
    outCur: 'USD',
    income: '1000',
    inCur: 'RUB',
    status: 'success',
    text: 'Успешно',
  },
  {
    outcome: '123,02',
    outCur: 'USD',
    income: '10000',
    inCur: 'RUB',
    status: 'pending',
    text: 'В обработке'
  },
  {
    outcome: '123,02',
    outCur: 'USD',
    income: '10000',
    inCur: 'RUB',
    status: 'reject',
    text: 'Отклонено'
  },


]

const Transactions = () => {
  return (
    <div>
      {recentTransactions.map(
        ({
           outcome,
           outCur,
           income,
           inCur,
           text,
           status
         }) => {
          return (
            <div className={styles.transaction}>

              <div className={styles.transaction__column}>
                <NavButton disabled>
                  <CachedRoundedIcon/>
                </NavButton>

                <div className={styles.transaction__date}>
                  <div className={styles.s14}>{outCur} to {inCur}</div>
                  <div className={styles.s12}>04:00</div>
                </div>
              </div>


              <div className={styles.transaction__column}>
                <div className={styles.s14p}>-{outcome}</div>
                <div className={styles.s12}>{outCur}</div>
              </div>

              <div className={styles.transaction__column}>
                <div className={styles.s14p}>+{income}</div>
                <div className={styles.s12}>{inCur}</div>
              </div>

              <div className={styles[status]}>
                <p className={styles.status_margin}>{text}</p>

              </div>
            </div>
          )
        }
      )
      }
    </div>
  )


  {/*<div className={styles.transa}>*/
  }
  {/*  */
  }
  {/*  <div className={styles.transa2}>*/
  }
  {/*    <NavButton disabled>*/
  }
  {/*      <CachedRoundedIcon/>*/
  }
  {/*    </NavButton>*/
  }
  {/*    <div className={styles.pleft}>*/
  }
  {/*      <div className={styles.s14}>USD to RUB</div>*/
  }
  {/*      <div className={styles.s12}>04:00</div>*/
  }
  {/*    </div>*/
  }
  {/*  </div>*/
  }


  {/*  <div className={styles.transa2}>*/
  }
  {/*    <div className={styles.s14p}>-123</div>*/
  }
  {/*    <div className={styles.s12}>USD</div>*/
  }
  {/*  </div>*/
  }

  {/*  <div className={styles.transa2}>*/
  }
  {/*    <div className={styles.s14p}>+10000</div>*/
  }
  {/*    <div className={styles.s12}>RUB</div>*/
  }
  {/*  </div>*/
  }

  {/*  <div className={styles.color}>*/
  }
  {/*    <p className={styles.marg}>В обработке</p>*/
  }

  {/*  </div>*/
  }
  {/*</div>*/
  }


  {/*<div className={styles.transa}>*/
  }
  {/*  <div className={styles.transa2}>*/
  }
  {/*    <NavButton disabled>*/
  }
  {/*      <CachedRoundedIcon/>*/
  }
  {/*    </NavButton>*/
  }
  {/*    <div className={styles.pleft}>*/
  }
  {/*      <div className={styles.s14}>USD to RUB</div>*/
  }
  {/*      <div className={styles.s12}>04:00</div>*/
  }
  {/*    </div>*/
  }
  {/*  </div>*/
  }


  {/*  <div className={styles.transa2}>*/
  }
  {/*    <div className={styles.s14p}>-123</div>*/
  }
  {/*    <div className={styles.s12}>USD</div>*/
  }
  {/*  </div>*/
  }

  {/*  <div className={styles.transa2}>*/
  }
  {/*    <div className={styles.s14p}>+10000</div>*/
  }
  {/*    <div className={styles.s12}>RUB</div>*/
  }
  {/*  </div>*/
  }

  {/*  <div className={styles.color2}>*/
  }
  {/*    <p className={styles.marg}>Успешно</p>*/
  }

  {/*  </div>*/
  }
  {/*</div>*/
  }
  {/*<div className={styles.transa}>*/
  }
  {/*  <div className={styles.transa2}>*/
  }
  {/*    <NavButton disabled>*/
  }
  {/*      <CachedRoundedIcon/>*/
  }
  {/*    </NavButton>*/
  }
  {/*    <div className={styles.pleft}>*/
  }
  {/*      <div className={styles.s14}>USD to RUB</div>*/
  }
  {/*      <div className={styles.s12}>04:00</div>*/
  }
  {/*    </div>*/
  }
  {/*  </div>*/
  }


  {/*  <div className={styles.transa2}>*/
  }
  {/*    <div className={styles.s14p}>-123</div>*/
  }
  {/*    <div className={styles.s12}>USD</div>*/
  }
  {/*  </div>*/
  }

  {/*  <div className={styles.transa2}>*/
  }
  {/*    <div className={styles.s14p}>+10000</div>*/
  }
  {/*    <div className={styles.s12}>RUB</div>*/
  }
  {/*  </div>*/
  }

  {/*  <div className={styles.color3}>*/
  }
  {/*    <p className={styles.marg}>Отклонено</p>*/
  }

  {/*  </div>*/
  }
  {/*</div>*/
  }

};

export default Transactions;