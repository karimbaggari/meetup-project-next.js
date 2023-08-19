import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";
function newMeetUp() {
  const router = useRouter();
  async function addMeetUpHandler(enteredMeetUpData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    router.push("/");
    console.log(data);
  }
  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="add your own meetup create an amazing networking opportunities."
        />{" "}
      </Head>
      <NewMeetUpForm onAddMeetup={addMeetUpHandler} />{" "}
    </Fragment>
  );
}

export default newMeetUp;
