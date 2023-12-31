<template>
    <div class="weather-app" v-if="citiesWeather.length !== 0">
        <div class="weather-container"
            v-for="cityWeather in citiesWeather"
            :key="cityWeather.id"
        >
            <div class="weather-content">
                <h4>{{ cityWeather.name }}, {{ cityWeather.sys.country }}</h4>

                <p class="weather-temp">
                    <img :src="`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`" alt="">
                    <b class="weather-temp__text">{{ Math.round(cityWeather.main.temp) }}&#176;С</b>
                </p>
                <p>Feels like {{ cityWeather.main.feels_like }}&#176;С. {{ cityWeather.weather[0].description }}</p>

                <p class="weather-block">
                    <div class="weather-item">
                        <BaseIcon icon="mdi-navigation" style="transform: rotate(-35deg); margin-left: -6px"/>
                        <span>{{ cityWeather.wind.speed }}m/s SSE</span>
                    </div>
                    <div class="weather-item">
                        <BaseIcon icon="healthicons:blood-pressure-outline"/>
                        <span>{{ cityWeather.main.pressure }}hPa</span>
                    </div>
                </p>
                <p class="weather-block">
                    <div class="weather-item">
                        Humidity: {{ cityWeather.main.humidity }}%
                    </div>
                    <div class="weather-item">
                        Visibility: {{ formateVisibility(cityWeather.visibility) }}
                    </div>
                </p>
            </div>
        </div>

        <TheSettings
            :citiesWeather="citiesWeather"
            v-on:getCities="getCitiesWeather"
        />
    </div>
    <div class="preloader" v-else="successGetGeo">
        <img src="https://fareny-cum.online/preloader.svg" alt="preloader">
    </div>
    <AddCity
        v-else="!successGetGeo"
        v-on:getCities="getCitiesWeather"
    />
</template>

<script setup lang="ts">
    import TheSettings from './TheSettings.vue';
    import AddCity from '@/components/AddCity.vue';
    import BaseIcon from './BaseIcon.vue';
    import { getLocalStorage, setLocalStorage } from '@/helpers/localStorage'

    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    import type { Ref } from 'vue';

    const citiesWeather: Ref<[]> = ref([]);
    const geo: Geolocation = navigator.geolocation;
    const successGetGeo: Ref<boolean> = ref(false);

    const getCitiesWeather = (): void => {
      citiesWeather.value = getLocalStorage();
    }

    const formateVisibility = (distance: number): string => distance / 1000 + 'km';

    onMounted(async () => {

        getCitiesWeather();

        if (citiesWeather.value.length === 0) {
            successGetGeo.value = false;
            geo.getCurrentPosition(async (item: GeolocationPosition): Promise<void> => {
                const lat = item.coords.latitude;
                const lon = item.coords.longitude;
                const cityWeather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=${process.env.VUE_APP_LANGUAGE}&appid=${process.env.VUE_APP_API_KEY}`).then(res => res.data);
                setLocalStorage([cityWeather]);
                citiesWeather.value.push(cityWeather);
                successGetGeo.value = true;
            })

        }

    })


</script>

<style lang="scss">
    weather-widjet {
        position: relative;
        & .preloader {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: auto;
        }
    }

    .weather-app {
        margin: 20% auto;
        font-family: sans-serif;
        position: relative;
        width: fit-content;

        & .weather-container {
            &:not(:last-child) {
              margin-bottom: 16px;
            }
            & .weather-content {
                width: 240px;
                padding: 8px 16px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                transition: 0.4s ease-in-out;
                &:hover {
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                }
            }

            & .weather-temp {
              display: flex;
              align-items: center;
              justify-content: center;

              & .weather-temp__text {
                font-size: 32px;
              }
            }

            & .weather-block {
              display: flex;
              align-items: center;
              justify-content: space-between;

              & .weather-item {
                display: flex;
                align-items: center;

                & span {
                  padding-left: 4px;
                }
              }
            }
        }
    }

    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateY(-20px);
        opacity: 0;
    }
</style>
