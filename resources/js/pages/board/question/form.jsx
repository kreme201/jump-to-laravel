import InputField from "@/components/fields/InputField";
import TextField from "@/components/fields/TextField";
import BaseLayout from "@/layouts/BaseLayout";
import PrimaryButton from "@/components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";

export default function ({ auth, question = null }) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        subject: question?.subject || "",
        content: question?.content || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (question?.id) {
            put(route("board.question.edit.store", question));
        } else {
            post(route("board.question.store"));
        }
    };

    return (
        <BaseLayout user={auth.user}>
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
                <Link
                    href={
                        question
                            ? route("board.question.view", question)
                            : route("board.question.list")
                    }
                    className="btn btn-outline-secondary mx-2"
                >
                    취소
                </Link>
            </form>
        </BaseLayout>
    );
}
