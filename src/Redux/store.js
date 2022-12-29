import { configureStore,createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getElement = createAsyncThunk(
    'weather/getElement' ,async(city,thunkAPI)=>{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16b7b06634431c8a9632fbfda8c523bf`)
        // .catch(error => console.log('city not found'))
        return await res.data
    }
)

export const weatherSlice = createSlice({
    name:'weather',
    initialState:{
        data:{
            "coord": {
                "lon": -6.8401,
                "lat": 33.9911
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 286.19,
                "feels_like": 286.16,
                "temp_min": 286.19,
                "temp_max": 287.68,
                "pressure": 1025,
                "humidity": 100
            },
            "visibility": 5000,
            "wind": {
                "speed": 0,
                "deg": 0
            },
            "clouds": {
                "all": 20
            },
            "dt": 1671829377,
            "sys": {
                "type": 1,
                "id": 2402,
                "country": "MA",
                "sunrise": 1671780584,
                "sunset": 1671816174
            },
            "timezone": 3600,
            "id": 2538474,
            "name": "Rabat",
            "cod": 200
        }
        ,isLoad:true
    },extraReducers:{
        [getElement.pending]:(state)=>{
            state.isLoad=true;
        },
        [getElement.fulfilled]:(state,action)=>{
            state.data = action.payload;
            state.isLoad=false;
        },
        [getElement.rejected]:(state)=>{
            state.isLoad=false;
        },
    }
})

const store = configureStore({
    reducer:weatherSlice.reducer
})
export default store;