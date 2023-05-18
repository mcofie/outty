<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-8 col-md-12 col-sm-12">
                <div class="container">
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
                                <div class="my-5">
                                    <ul class="list-unstyled text-center">
                                        <li class="mb-4 text-center">
                                            <h1 style="font-size: 3.5rem;">Make your Event Lineup
                                                <br/>Digital in Minutes</h1>
                                        </li>
                                        <li>
                                            <p>
                                                Streamline your event planning and elevate the attendee experience with
                                                our <br/>Digital Event Lineup software!
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-xl-8 col-lg-8 col-md-10 mb-5">
                            <div class="get-started-section p-2 rounded-5">
                                <div class="input-group input-group-lg">
                                    <span class="input-group-text" id="inputGroup-sizing-lg"><h4>outty.co/</h4></span>
                                    <input type="text" class="form-control"
                                           placeholder="your event name"
                                           aria-label="Username"
                                           v-model="eventName"
                                           aria-describedby="basic-addon1">
                                    <button
                                        :class="[!v$.$invalid ? 'btn btn-primary rounded-5 d-none d-sm-block': 'btn btn-primary rounded-5 disabled d-none d-sm-block']"
                                        @click="startCreateEvent" type="button">
                                        Create Event
                                    </button>
                                </div>
                            </div>
                            <div class="w-100 my-2 d-block d-sm-none">
                                <button
                                    :class="[!v$.$invalid ? 'btn btn-primary rounded-5 btn-lg w-100 py-3': 'btn btn-primary rounded-5 disabled w-100 btn-lg py-3']"
                                    @click="startCreateEvent" type="button">
                                    Create Event
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
                        <div class="row">
                            <div class="col-md-6 my-3">
                                <div class="card primary-color  h-100">
                                    <div class="card-body my-4 text-center text-white">
                                        <ul class="list-unstyled">
                                            <li class="align-content-center my-3">
                                                <div
                                                    class="circle rounded-circle bg-white">
                                                    <img class="img-fluid w-50 align-self-center text-center mt-4"
                                                         src="../imgs/money.png"/>
                                                </div>
                                            </li>
                                            <li class="mb-3">
                                                <h4>Cut down the cost of printing programme lineup for events</h4>
                                            </li>
                                            <li>
                                                <p class="text-start">
                                                    One of the most effective ways to cut down on printing costs is to
                                                    create a digital program lineup that attendees can access on their
                                                    mobile devices. This eliminates the need for physical copies of the
                                                    program lineup, saving you printing and shipping costs.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 my-3">
                                <div class="card accentColor h-100">
                                    <div class="card-body my-4 text-center justify-content-center">
                                        <ul class="list-unstyled">
                                            <li class="align-content-center my-3">
                                                <div
                                                    class="circle rounded-circle bg-white">
                                                    <img class="img-fluid w-50 align-self-center text-center mt-4"
                                                         src="../imgs/flower.png"/>
                                                </div>
                                            </li>
                                            <li class="mb-3">
                                                <h4>Quick & easy access to beautifully crafted programme line up</h4>
                                            </li>
                                            <li>
                                                <p class="text-start">
                                                    One of the most effective ways to cut down on printing costs is to
                                                    create a digital program lineup that attendees can access on their
                                                    mobile devices. This eliminates the need for physical copies of the
                                                    program lineup, saving you printing and shipping costs.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center ">
                            <div class="col-md-12">
                                <div class="card secondary-color my-4">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-4 d-flex justify-content-center d-block d-sm-none">
                                                <div
                                                    class="circle-large rounded-circle bg-white border-1 text-center">
                                                    <img class="img-fluid w-50 align-self-center text-center mt-5"
                                                         src="../imgs/information.png"/>
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <ul class="list-unstyled mt-5">
                                                    <li class="mb-3">
                                                        <h4>Collect contact details of attendees & foster
                                                            engagement </h4>
                                                    </li>
                                                    <li>
                                                        <p>Offer attendees the option to register for sessions they want
                                                            to attend. You can use the mobile app or website to allow
                                                            attendees to select the sessions they want to attend, and it
                                                            can also help you manage attendance for each session.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-md-4 d-none d-sm-block">
                                                <div
                                                    class="circle-large rounded-circle bg-white border-1 text-center">
                                                    <img class="img-fluid w-50 align-self-center text-center mt-5"
                                                         src="../imgs/information.png"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pricing-section" data-bs-spy="scroll" id="pricing">
                        <div class="row justify-content-center">
                            <div class="col-md-6 text-center my-5">
                                <ul class="list-unstyled">
                                    <li>
                                        <h4>PRICING</h4>
                                    </li>
                                    <li>
                                        <h1 class="font-large">
                                            $1.99
                                        </h1>
                                    </li>
                                    <li><p>Create an inclusive event line-up that matter.</p></li>
                                    <li>
                                        <a href="get-started">
                                            <button class="btn btn-primary rounded-5 btn-lg py-3 px-5" type="button">
                                                Create
                                                Event
                                            </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="row justify-content-center my-4">
                            <div class="col-md-12">
                                <h3 class="text-center lh-base">
                                    Simply create event line up for your <br>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-primary dropdown-toggle"
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
                                <div class="card grey mt-5">
                                    <div class="card-body">
                                        <div class="row justify-content-center">
                                            <div class="col-md-8 text-center position-relative">
                                                <div
                                                    class="position-absolute top-0 start-0 d-flex justify-content-start">
                                                    <img class="img-fluid w-25 opacity-25"
                                                         src="../imgs/forget_me_not.png"/>
                                                </div>

<!--                                                <div class="position-absolute top-0 end-0 d-flex justify-content-end">-->
<!--                                                    <img class="img-fluid w-25 opacity-25"-->
<!--                                                         src="../imgs/wreath.png"/>-->
<!--                                                </div>-->

                                                <ul class="list-unstyled mt-5">
                                                    <li>
                                                        <qrcode-vue :value="selectedEvent.slug" :size="qrCode.size"
                                                                    level="H"/>
                                                    </li>
                                                    <li class="my-2">
                                                        <h4>{{ selectedEvent.name }} <a target="_blank"
                                                                                        :href="selectedEvent.slug">
                                                            <i
                                                                class="fa-solid fa-arrow-up-right-from-square"></i>
                                                        </a></h4>
                                                    </li>
                                                    <li class="mb-3">
                                                        <small>
                                                            {{ selectedEvent.date }}
                                                        </small>
                                                    </li>
                                                    <li>
                                                        <p>{{ selectedEvent.description }}</p>
                                                    </li>

                                                    <li>
                                                        <hr/>
                                                    </li>
                                                    <li>
                                                        <div class="d-flex justify-content-evenly">
                                                            <button type="button"
                                                                    class="btn btn-primary rounded-5 btn-lg py-3 px-5">
                                                                QR Code <i class="fa-solid fa-circle-down"></i>
                                                            </button>
                                                            <button type="button"
                                                                    class="btn btn-secondary rounded-5 btn-lg py-3 px-5">
                                                                Brochure <i class="fa-solid fa-print"></i>
                                                            </button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
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

                    <footer class="my-4 py-4">
                        <div class="d-flex justify-content-between">
                            <small>&copy; 2023 outty.co</small>
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="#">privacy</a></li>
                                <li class="list-inline-item"><a href="#">terms</a></li>
                                <li class="list-inline-item"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </footer>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import QrcodeVue from 'qrcode.vue'
import {minLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const eventName = ref('')
const eventCategory = ref('Weddings')
const qrCode = ref({value: "https://outty.co", size: 180})
const categories = ['Conferences', 'Parties', 'Meetings', 'Funeral', 'Wedding']

const sampleEvents = [{
    slug: "https://outty.co/edem-weds-mavis",
    name: "Edem Weds Mavis",
    description: "Join us in celebrating the joyous union of love and commitment as Edem and Mavis embark on their journey of togetherness.",
    date: "18th May 2023",
    category: "wedding"
},
    {
        slug: "https://outty.co/funeral",
        name: "Rev. Adatsi's Funeral",
        description: "Please note that this is just a sample lineup and can be customized based on cultural or religious traditions, personal preferences, and the specific arrangements made for the funeral event.",
        date: "13th March 2023",
        category: "conferences"
    },
    {
        slug: "https://outty.co/funeral",
        name: "Rev. Adatsi's Funeral",
        description: "Please note that this is just a sample lineup and can be customized based on cultural or religious traditions, personal preferences, and the specific arrangements made for the funeral event.",
        date: "13th March 2023",
        category: "parties"
    },
    {
        slug: "https://outty.co/funeral",
        name: "Rev. Adatsi's Funeral",
        description: "Please note that this is just a sample lineup and can be customized based on cultural or religious traditions, personal preferences, and the specific arrangements made for the funeral event.",
        date: "13th March 2023",
        category: "meetings"
    },
    {
        slug: "https://outty.co/rev-adatsis-funeral",
        name: "Rev. Adatsi's Funeral",
        description: "In loving memory of Rev. Christopher Adatsi, we gather here to honor and celebrate a life well-lived. It is with deep sadness that we announce their passing, and we invite you to join us in bidding a final farewell to a cherished Father, who touched the lives of so many.",
        date: "18th May 2023",
        category: "funeral"
    }]

const selectedEvent = ref(sampleEvents[0])


const startCreateEvent = () => {
    if (eventName.value.length !== 0) {
        location.href = `get-started?event_name=${eventName.value}`
    }

}

const onCategoryChanged = ({category}) => {
    const w = sampleEvents.filter(i => i.category.toLowerCase() === category.toLowerCase())
    eventCategory.value = category
    selectedEvent.value = w[0]
}

const rules = {
    eventName: {
        required, minLengthValue: minLength(5), $autoDirty: true,
    }
}

const v$ = useVuelidate(rules, {eventName})


</script>
