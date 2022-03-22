import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pairs: [
    {
      name: 'BTC',
      value: 'BTC'
    },
    {
      name: 'USDT',
      value: 'USDT'
    }
  ],
  exchanges: [
    {
      name: 'Binance',
      value: 'Binance',
    },
    {
      name: 'Coinbase',
      value: 'Coinbase',
    },
    {
      name: 'FTX',
      value: 'FTX',
    },
    {
      name: 'Bitmex',
      value: 'Bitmex',
    },
  ],
  pair: 'BTC',
  exchange: 'Binance',
}

export const standardSlice = createSlice({
  name: 'standard',
  initialState,
  reducers: {
    setPair: (state, { payload }) => {
      state.pair = payload
    },
    setExchange: (state, { payload }) => {
      state.exchange = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPair, setExchange } = standardSlice.actions

export default standardSlice.reducer
