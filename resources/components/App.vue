<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9 col-xl-8 col-md-12 col-sm-12">
                <div class="container">
                    <!-- As a link -->
                    <nav class="navbar bg-body-tertiary py-3 px-2">
                        <div class="container">
                            <div class="d-flex justify-content-between w-100">
                                <h6><a class="navbar-brand" href="#">outty.co</a></h6>
                                <ul class="list-inline">
                                    <li class="list-inline-item mx-4"><a href="#">pricing</a></li>
                                    <li class="list-inline-item ml-5"><a href="#">about</a></li>
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
                                            <h1 style="font-size: 3.5rem;">Get a Digital Event Lineup
                                                <br/>in Minutes</h1>
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
                                    <input type="text" class="form-control" placeholder="your event name"
                                           aria-label="Username"
                                           v-model="eventName"
                                           aria-describedby="basic-addon1">
                                    <button class="btn btn-primary rounded-5" @click="startCreateEvent" type="button">
                                        Create Event
                                    </button>
                                </div>
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
                                            <div class="col-md-4">
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

                    <div class="pricing-section">
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
                                            <button class="btn btn-primary rounded-5 btn-lg" type="button">
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
                                <div class="card grey">
                                    <div class="card-body">
                                        <div class="row justify-content-center">
                                            <div class="col-md-8 text-center">
                                                <ul class="list-unstyled mt-5">
                                                    <li class="mb-3">
                                                        <a href="https://telegra.ph/Streamline-your-event-planning-and-elevate-the-attendee-experience-with-Outty-04-26">
                                                            <h4>Learn more on how people are using Outty to power their
                                                                in-person events</h4>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <p>One of the most effective ways to cut down on printing costs
                                                            is to create a digital program lineup that attendees can
                                                            access on their mobile devices. This eliminates the need for
                                                            physical copies of the program lineup, saving you printing
                                                            and shipping costs.</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

const eventName = ref('')

const startCreateEvent = () => {
    if (eventName.value.length !== 0) {
        location.href = `get-started?event_name=${eventName.value}`
    }

}



</script>
