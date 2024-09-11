import Layout from "@/components/Layout.jsx";

export default function ({ auth }) {
    return (
        <Layout user={auth.user}>
            <h2>Hello World</h2>
        </Layout>
    );
}
