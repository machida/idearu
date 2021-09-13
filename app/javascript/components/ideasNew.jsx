import React, { Fragment, useState } from 'react'

const IdeasNew = () => {
  const [formValues, setFormValues] = useState({
    problem: '解決したい問題',
    target: 'ターゲット',
    service: 'サービス名',
    category: 'カテゴリー',
    appealPoint: 'アピールポイント、主要機能',
    competitiveService: '競合サービス',
    differentiationFactor: '差別化要素',
  })

  const hundleClick = () => {
    const problem = document.getElementById('problem').value || '解決したい問題'
    const target = document.getElementById('target').value || 'ターゲット'
    const service = document.getElementById('service').value || 'サービス名'
    const category = document.getElementById('category').value || 'カテゴリー'
    const appealPoint =
      document.getElementById('appeal_point').value ||
      'アピールポイント、主要機能'
    const competitiveService =
      document.getElementById('competitive_services').value || '競合サービス'
    const differentiationFactor =
      document.getElementById('differentiation_factor').value || '差別化要素'

    setFormValues({
      ...formValues,
      problem,
      target,
      service,
      category,
      appealPoint,
      competitiveService,
      differentiationFactor,
    })
  }

  return (
    <>
      <div className="columns">
        <div className="title column">新規投稿イメージ</div>
        <div className="column">
          <button
            className="button is-info m-1"
            onClick={hundleClick}
            type="button"
          >
            更新
          </button>
        </div>
      </div>

      <div className="container">
        <div className="ideas-container card">
          <div className="card-header">
            <div className="card-header-title is-size-4">
              [{formValues.problem}]<br />
              という問題を解決したい
            </div>
          </div>
          <div className="elevatorpitch-container card-content">
            [{formValues.service}]というサービスは、
            <br />[{formValues.problem}
            ]という問題を解決したい
            <br /> [{formValues.target}]向けの、
            <br />[{formValues.category}]です。
            <br />
            ユーザーは[
            {formValues.appealPoint}
            ]ができ
            <br />[{formValues.competitiveService}]とは違って、
            <br />[{formValues.differentiationFactor}]事が特徴です。
          </div>
        </div>
      </div>
    </>
  )
}

export default IdeasNew
