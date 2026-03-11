import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import AppPdfViewer from "@site/src/components/AppPdfViewer";
import { RPConfig } from "@react-pdf-kit/viewer";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <RPConfig>
      <div className="container">
        <h1>{siteConfig.title}</h1>
        <br />
        <h2>Default Toolbar</h2>
        <AppPdfViewer />
        <br />
        <h2>Without Toolbar</h2>
        <AppPdfViewer
          showToolbar={false}
          defaultLayoutProps={{
            style: { width: "100%", height: "550px" },
          }}
        />
        <br />
        <h2>Mobile</h2>
        <AppPdfViewer
          defaultLayoutProps={{
            style: { width: "500px" },
          }}
        />
      </div>
    </RPConfig>
  );
}
