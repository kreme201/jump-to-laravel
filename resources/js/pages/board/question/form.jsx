import InputField from "@/components/fields/InputField";
import TextField from "@/components/fields/TextField";
import Layout from "@/components/Layout";
import PrimaryButton from "@/components/PrimaryButton";
import { useForm } from "@inertiajs/react";

export default function ({ auth, question = null }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        subject: question?.subject || "",
        content: question?.content || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = question?.id
            ? route("board.question.edit.store", question.id)
            : route("board.question.store");

        post(url, {
            onSuccess: () => reset(),
        });
    };

    return (
        <Layout user={auth.user}>
            <h5 className="my-3 border-bottom pb-2">질문 등록</h5>

            <form method="post" className="my-3" onSubmit={handleSubmit}>
                <InputField
                    label="제목"
                    value={data.subject}
                    setValue={(value) => setData("subject", value)}
                    error={errors.subject}
                />
                <TextField
                    label="내용"
                    value={data.content}
                    setValue={(value) => setData("content", value)}
                    error={errors.content}
                />
                <PrimaryButton type="submit">저장하기</PrimaryButton>
            </form>
        </Layout>
    );
}
