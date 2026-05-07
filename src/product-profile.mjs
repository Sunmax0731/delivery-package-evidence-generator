export const productProfile = {
  "repository": "delivery-package-evidence-generator",
  "title": "納品パッケージ・説明書・証跡生成",
  "domain": "AssetPipeline",
  "hostApp": null,
  "rank": 24,
  "ideaNo": 9,
  "overview": "納品パッケージ、サンプル、操作説明、検品結果、リリース証跡をまとめて生成する。",
  "problem": "アセットはファイルだけでなく、説明、サンプル、検査結果、公開証跡までそろえる必要がある。",
  "differentiation": "制作物、説明書、検品結果、リリースノートを同じ納品単位で出力する。",
  "publish": "GitHub Release / BOOTH",
  "surface": "CLI + evidence manifest",
  "entity": "delivery package",
  "requiredFields": [
    "id",
    "title",
    "source",
    "packagePath",
    "readme",
    "owner",
    "acceptance"
  ],
  "warningField": "checksum",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
