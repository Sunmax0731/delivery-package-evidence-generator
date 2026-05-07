# delivery-package-evidence-generator

納品パッケージ・説明書・証跡生成 は、納品パッケージ、サンプル、操作説明、検品結果、リリース証跡をまとめて生成する。

## 何を解決するか

アセットはファイルだけでなく、説明、サンプル、検査結果、公開証跡までそろえる必要がある。

## 差別化

制作物、説明書、検品結果、リリースノートを同じ納品単位で出力する。

## 公開先

- GitHub Release / BOOTH

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- CLI + evidence manifest の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/delivery-package-evidence-generator-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\AssetPipeline\created_idea_009_delivery-package-evidence-generator`
- idea ZIP: `D:\AI\AssetPipeline\created_idea_009_delivery-package-evidence-generator\idea_009_delivery-package-evidence-generator.zip`
- PICKUP rank: 24
- Domain: AssetPipeline
