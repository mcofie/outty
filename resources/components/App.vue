<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-xxl-7 col-xl-10 col-md-10 col-sm-12">
                <!-- As a link -->
                <nav class="navbar bg-body-tertiary p-4">
                    <div class="container">
                        <div class="d-flex justify-content-between align-content-center w-100">
                            <h6><a class="navbar-brand" href="#"><i class="fa-solid fa-caret-right"></i>
                                outty.co</a></h6>
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item mx-4"><a href="#pricing">pricing</a></li>
                                <li class="list-inline-item ml-5"><a
                                    target="_blank"
                                    href="https://telegra.ph/Streamline-your-event-planning-and-elevate-the-attendee-experience-with-Outty-04-26">about</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div class="hero-section">
                    <div class="row justify-content-center">
                        <div class="col-sm-8 col-md-10">
                            <div class="my-5 pt-3">
                                <ul class="list-unstyled text-center">
                                    <li class="mb-4 text-center">
                                        <h1 class="loud-fonts">Bring live to your physical
                                            events!
                                        </h1>
                                    </li>
                                    <li>
                                        <p class="mx-4 mx-xl-5 mx-lg-5">
                                            Streamline your event planning and elevate the attendee
                                            experience with
                                            our Digital Event Lineup software!
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-7 col-md-9 col-sm-9 col-xxl-7 col-11 mb-lg-5 mb-xl-5 mb-3 pb-5">
                        <div class="get-started-section p-2 rounded-5">
                            <div class="input-group input-group-lg">
                                                <span class="input-group-text"
                                                      id="inputGroup-sizing-lg"><h4>outty.co/</h4></span>
                                <input type="text" class="form-control"
                                       placeholder="your event name"
                                       aria-label="Username"
                                       v-model="eventName"
                                       aria-describedby="basic-addon1">
                                <button
                                    :class="[!v$.$invalid ? 'btn btn-primary rounded-5 d-none d-sm-block font-bold': 'btn btn-primary rounded-5 disabled d-none d-sm-block font-bold']"
                                    @click="startCreateEvent" type="button">
                                    CREATE EVENT
                                </button>
                            </div>
                        </div>
                        <div class="w-100 my-2 d-block d-sm-none">
                            <button
                                :class="[!v$.$invalid ? 'btn btn-primary rounded-5 btn-lg w-100 py-3 font-bold': 'btn btn-primary rounded-5 disabled w-100 btn-lg py-3 font-bold']"
                                @click="startCreateEvent" type="button">
                                CREATE EVENT
                            </button>
                        </div>
                        <div class="w-100 text-start">
                            <small v-if="v$.eventName.$error" class="text-danger text-center w-100"> {{
                                    v$.eventName.$errors[0].$message
                                }}</small>
                        </div>
                    </div>
                </div>

                <div class="features-section">
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-sm-9 col-xl-6 col-lg-6 col-xxl-6 col-11 my-3">
                            <div class="card primary-color primary-color-border h-100">
                                <div class="card-body my-4 text-center text-white">
                                    <ul class="list-unstyled">
                                        <li class="align-content-center my-3 d-none">
                                            <div
                                                class="circle rounded-circle bg-white">
                                                <img
                                                    class="img-fluid w-50 align-self-center text-center mt-4"
                                                    src="../imgs/money.png"/>
                                            </div>
                                        </li>
                                        <li class="mb-3">
                                            <h1 class="text-start sub-fonts">Cut down the
                                                cost
                                                of
                                                printing</h1>
                                        </li>
                                        <li>
                                            <p class="text-start">
                                                One of the most effective ways to cut down on printing
                                                costs
                                                is to
                                                create a digital program lineup that attendees can
                                                access on
                                                their
                                                mobile devices.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-9 col-xl-6 col-lg-6 col-xxl-6 col-11 my-3">
                            <div class="card accent-color accent-color-border h-100">
                                <div class="card-body my-4 text-center justify-content-center">
                                    <ul class="list-unstyled">
                                        <li class="align-content-center my-3 d-none">
                                            <div
                                                class="circle rounded-circle bg-white">
                                                <img
                                                    class="img-fluid w-50 align-self-center text-center mt-4"
                                                    src="../imgs/flower.png"/>
                                            </div>
                                        </li>
                                        <li class="mb-3">
                                            <h1 class="text-start sub-fonts">Organize an all-inclusive
                                                event</h1>
                                        </li>
                                        <li>
                                            <p class="text-start d-">
                                                One of the most effective ways to cut down on printing
                                                costs
                                                is to
                                                create a digital program lineup that attendees can
                                                access on
                                                their
                                                mobile devices.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center ">
                        <div class="col-md-12 col-sm-9 col-xl-12 col-lg-12 col-xxl-12 col-11">
                            <div class="card secondary-color secondary-color-border my-4">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <ul class="list-unstyled">
                                                <li class="mb-3">
                                                    <h1 class="sub-fonts">Collect contact details
                                                        of
                                                        attendees
                                                        & foster
                                                        engagement </h1>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <button type="button" class="btn btn-link text-end text-black text-decoration-none">
                                    Learn more
                                    &nbsp; <i
                                    class="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="pricing-section my-5" data-bs-spy="scroll" id="pricing">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-8 text-center my-5 py-5">
                        <ul class="list-unstyled">
                            <li>
                                <h4>PRICING</h4>
                            </li>
                            <li>
                                <h1 class="font-large">
                                    $1.99
                                </h1>
                            </li>
                            <li><h3>Get this at the price of pop.</h3></li>
                            <li class="mx-lg-0 mx-3 mx-md-1 my-3  justify-content-center row">
                                <p class="col-lg-7 col-xl-7 col-12 col-md-9 col-sm-10">
                                    Please note that this is just a sample lineup and can be customized based on
                                    cultural or religious traditions, personal preferences, and the specific
                                    arrangements made for the funeral event.
                                </p>
                            </li>
                            <li>
                                <a href="get-started">
                                    <button class="btn btn-primary rounded-5 btn-lg py-3 px-5 font-bold"
                                            type="button">
                                        CREATE
                                        EVENT
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-12 col-sm-9 col-xl-12 col-lg-12 col-xxl-12 col-11">
                <div>
                    <div class="row justify-content-center my-4">
                        <div class="col-md-10 col-lg-8 col-xxl-8 col-sm-12">
                            <h3 class="text-center lh-base mx-lg-5 mx-2 mx-xl-5 mx-xxl-5 mx-md-5" style="font-size: 2.3rem;">
                                Simply create event line up for your
                                <div class="btn-group">
                                    <button type="button" class="btn btn-dark rounded-5 px-3 border-5 dropdown-toggle"
                                            data-bs-toggle="dropdown" data-bs-display="static"
                                            aria-expanded="false">
                                        <h3> #{{ eventCategory }}</h3>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-lg-end">
                                        <li v-for="(category,index) in categories">
                                            <button :key="index" class="dropdown-item"
                                                    @click="onCategoryChanged({category})" type="button">{{
                                                    category
                                                }}
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                in minutes
                            </h3>
                            <div class="card mt-5 animate__animated animate__fadeIn"
                                 :style="{'background':selectedEvent.backgroundColor, 'color':selectedEvent.textColor, 'background-image':'url(../imgs/forget_me_not.png)'}">
                                <div class="card-body">
                                    <div class="row justify-content-center">
                                        <div class="col-md-8 text-center position-relative">
                                            <ul class="list-unstyled my-lg-5 py-lg-3 my-xl-5 py-xl-3">
                                                <li>
                                                    <qrcode-vue :value="appURL+selectedEvent.slug"
                                                                :size="qrCode.size"
                                                                :background="selectedEvent.backgroundColor"
                                                                :foreground="selectedEvent.textColor"
                                                                level="H"/>
                                                </li>
                                                <li class="mt-2 mb-1">
                                                    <h2>{{ selectedEvent.name }} <a target="_blank"
                                                                                    :href="appURL + selectedEvent.slug">
                                                        <i :style="{'color':selectedEvent.textColor}"
                                                           class="fa-solid fa-link"></i>
                                                    </a></h2>
                                                </li>
                                                <li>
                                                    <p class="text-center">{{ selectedEvent.description }}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="justify-content-center row d-none">
                        <div class="col-md-6 justify-content-center mt-4 mb-5">
                            <div class="d-flex justify-content-between">
                                <button type="button"
                                        @click="onDownloadQRCode(selectedEvent.slug)"
                                        class="btn btn-primary rounded-5 btn-lg py-3 px-5">
                                    QR Code <i class="fa-solid fa-circle-down"></i>
                                </button>
                                <button type="button"
                                        class="btn btn-secondary rounded-5 btn-lg py-3 px-5">
                                    Brochure <i class="fa-solid fa-print"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-10 text-center">
                            <small class="mt-3 text-muted ">Read more about how outty.co is helping
                                streamline events
                                and engage audiences <br>
                                <a target="_blank"
                                   href="https://telegra.ph/Streamline-your-event-planning-and-elevate-the-attendee-experience-with-Outty-04-26">
                                    here </a>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-8 col-md-10 col-sm-10 col-11">
                <footer class="my-4 py-4">
                    <div class="d-flex justify-content-between">
                        <small>&copy; 2023 outty.co</small>
                        <ul class="list-inline">
                            <li class="list-inline-item"><a href="#">privacy</a></li>
                            <li class="list-inline-item"><a href="#">terms</a></li>
                            <li class="list-inline-item"><a href="#"><i
                                class="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>

    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import QrcodeVue from 'qrcode.vue'
import {minLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import Requester from "../js/network/Requester";
import {APIs} from "../js/network/APIs";
import {appURL} from "../js/helper";

const eventName = ref('')
const categories = ['Parties', 'Meetings', 'Funeral', 'Wedding']
const eventCategory = ref(categories[0])
const qrCode = ref({value: "https://outty.co", size: 180})


const sampleEvents = [
    {
        slug: "the-shutdown-party",
        name: "The Shutdown Party",
        description: "Please note that this is just a sample lineup and can be customized based on cultural or religious traditions.",
        date: "13th March 2023",
        category: "parties",
        textColor: '#1f70ad',
        backgroundColor: '#d6fffa',
        backgroundImage: '',
    },
    {
        slug: "you-and-your-business-workshop",
        name: "You and Your Business Workshop",
        description: "Please note that this is just a sample lineup and can be customized based on cultural or religious traditions.",
        date: "13th March 2023",
        category: "meetings",
        textColor: '#222222',
        backgroundColor: '#f5f5f5',
        backgroundImage: '',
    },
    {
        slug: "rev-adatsis-funeral",
        name: "Rev. Adatsi's Funeral",
        description: "Please note that this is just a sample lineup and can be customized based on cultural or religious traditions.",
        date: "18th May 2023",
        category: "funeral",
        textColor: '#ff3838',
        backgroundColor: '#000000',
        backgroundImage: '',
    }, {
        slug: "edem-weds-mavis",
        name: "Edem Weds Mavis",
        description: "Please note that this is just a sample lineup and can be customized based on cultural or religious traditions.",
        date: "18th May 2023",
        textColor: '#3d6d37',
        backgroundColor: '#fff2d6',
        backgroundImage: '',
        category: "wedding"
    }]

const selectedEvent = ref(sampleEvents[0])


const startCreateEvent = () => {
    if (eventName.value.length !== 0) {
        location.href = `get-started?event_name=${eventName.value}`
    }

}

const forceFileDownload = (response, title) => {
    console.log(title)
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', title + ".svg")
    document.body.appendChild(link)
    link.click()
}


const onDownloadQRCode = (slug) => {
    Requester.makeRequest({path: `${APIs.qrcode}${slug}`})
        .then((response) => {
            forceFileDownload(response, slug)
        })
        .catch((error) => {

        })
}

let slideCount = 0;
const getSelectedEvent = () => {
    setInterval(() => {

        if (slideCount >= categories.length) {
            slideCount = 0;
            let y = sampleEvents[slideCount];
            eventCategory.value = categories[slideCount];
            selectedEvent.value = y;

            ++slideCount
        } else {
            let y = sampleEvents[slideCount];
            eventCategory.value = categories[slideCount];
            selectedEvent.value = y
            ++slideCount
        }
    }, 10000)
}

const onCategoryChanged = ({category}) => {
    const w = sampleEvents.filter(i => i.category.toLowerCase() === category.toLowerCase())
    eventCategory.value = category
    selectedEvent.value = w[0]
}

onMounted(() => {
    getSelectedEvent()

});


const rules = {
    eventName: {
        required, minLengthValue: minLength(5), $autoDirty: true,
    }
}

const v$ = useVuelidate(rules, {eventName})


</script>

<style scoped>
.sub-fonts {
    font-size: 4.0rem;
}

.loud-fonts {
    font-size: 5.5rem;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .loud-fonts {
        font-size: 4.5rem;
    }
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .loud-fonts {
        font-size: 3.7rem;
    }

    .sub-fonts {
        font-size: 3rem;
    }
}
</style>
