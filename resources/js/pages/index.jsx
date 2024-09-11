import BaseLayout from "@/layouts/BaseLayout.jsx";

export default function ({ auth }) {
    return (
        <BaseLayout user={auth.user}>
            <h2>Hello World</h2>
        </BaseLayout>
    );
}
