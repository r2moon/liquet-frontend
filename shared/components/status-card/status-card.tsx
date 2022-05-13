import React, { ReactElement } from "react"

import Translation from "shared/data/translation"
import { ExternalRoutes } from "shared/pages/routes"

export type MsSocialPlatformsProps = {
  name: string
  link: string
}

const socialPlatforms: MsSocialPlatformsProps[] = [
  {
    name: Translation.en.social.twitter,
    link: ExternalRoutes.social.twitter
  },
  {
    name: Translation.en.social.telegram,
    link: ExternalRoutes.social.telegram
  },
  {
    name: Translation.en.social.discord,
    link: ExternalRoutes.social.discord
  },
  {
    name: Translation.en.social.medium,
    link: ExternalRoutes.social.medium
  }
]

function MsStatusCard(): ReactElement {
  return (
    <div className="ms-status-card">
      <div className="ms-status-card__visual">
        <i className="ms-status-card__visual__icon ms-status-card__visual__icon--1"></i>
        <i className="ms-status-card__visual__icon ms-status-card__visual__icon--2"></i>
        <i className="ms-status-card__visual__icon ms-status-card__visual__icon--3"></i>
      </div>
      <div className="ms-status-card__content">
        <div className="ms-status-card__status">
          <h1 className="ms-status-card__title">{Translation.en.page.restricted.title}</h1>
          <p className="ms-status-card__description">{Translation.en.page.restricted.description}</p>
        </div>
        <div className="ms-status-card__community">
          <p className="ms-status-card__community__description">{Translation.en.page.restricted.community}</p>
          <ul className="ms-status-card__community__list">
            {socialPlatforms.map((item, index) => (
              <li key={index} className="ms-status-card__community__item">
                <a
                  className="ms-status-card__community__link"
                  title={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`ms-icon ms-icon--${item.name.toLowerCase()}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MsStatusCard
