import Head from 'next/head'
import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await fetch('/api/hello');
    const json = await response.json();
    setData(json);
  }

  useEffect(() => {fetchData()},['/api/hello']);

  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={styles.container}>
        {data &&
          <div className="main-wrapper">
            <main className={styles.main}>
              <div className="page-content">

                <h1 className={styles.title}>
                  {data.title}
                </h1>
                <div><img src={data.mainImage}/></div>
                <div class="profile_layout">
                  <img src={data.profile.avatar} className="avatar" width="50" height="50"/>
                  <div>
                    <a href={'https://hackernoon.com/u/'+data.profile.handle} className="handle">@{data.profile.handle}</a>
                    <div class="adLink">{data.profile.adLink}</div>
                    <div class="displayName">{data.profile.displayName}</div>
                    <div className="bio">{data.profile.bio}</div>
                    <div className="github">{data.profile.github}</div>
                    <div className="twitter">{data.profile.twitter}</div>
                  </div>
                </div>
                <div className="content_layout">
                  <div dangerouslySetInnerHTML={{__html: data.markup}}></div>
                </div>
              </div>

            </main>
          </div>
        }
      </div>
    )
  }
}
