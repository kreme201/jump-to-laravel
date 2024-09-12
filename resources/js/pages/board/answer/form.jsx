import BaseLayout from "@/layouts/BaseLayout";
import PrimaryButton from "@/components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import TextField from "@/components/fields/TextField";

export default function ({ auth, question, answer }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        content: answer?.content || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("board.answer.edit.store", { question, answer }));
    };
    return (
        <BaseLayout user={auth.user}>
            <h5 className="my-3 border-bottom pb-2">답변 수정</h5>

            <form method="post" className="my-3" onSubmit={handleSubmit}>
                <TextField
                    value={data.content}
                    setValue={(value) => setData("content", value)}
                    error={errors.content}
                />
                <PrimaryButton type="submit">수정하기</PrimaryButton>
                <Link
                    href={route("board.question.view", question)}
                    className="btn btn-outline-secondary mx-2"
                >
                    취소
                </Link>
            </form>
        </BaseLayout>
    );
}
