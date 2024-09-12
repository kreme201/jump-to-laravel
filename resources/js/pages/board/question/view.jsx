import CardBadge from "@/components/CardBadge";
import TextField from "@/components/fields/TextField";
import BaseLayout from "@/layouts/BaseLayout";
import PrimaryButton from "@/components/PrimaryButton";
import dayjs from "@/libs/dayjs";
import { Link, useForm } from "@inertiajs/react";
import { marked } from "marked";

export default function ({ auth, question }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        content: "",
    });

    const confirmDelete = (e) => {
        if (!confirm("정말로 삭제하시겠습니까?")) {
            e.preventDefault();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("board.answer.store", question.id), {
            onSuccess: () => reset(),
        });
    };

    return (
        <BaseLayout user={auth.user}>
            <h2 className="border-bottom py-2">{question.subject}</h2>

            <div className="card my-3">
                <div className="card-body">
                    <div
                        className="card-text"
                        dangerouslySetInnerHTML={{
                            __html: marked.parse(question.content),
                        }}
                    />
                    <div className="d-flex justify-content-end">
                        {question.updated_at > question.created_at && (
                            <CardBadge
                                title="modified at"
                                content={dayjs(question.updated_at).fromNow()}
                            />
                        )}

                        <CardBadge
                            title={question.user.name}
                            content={dayjs(question.created_at).fromNow()}
                        />
                    </div>
                    <div className="my-3">
                        {question.user_id === auth.user.id && (
                            <>
                                <Link
                                    href={route(
                                        "board.question.edit",
                                        question.id
                                    )}
                                    className="btn btn-sm btn-outline-secondary"
                                >
                                    수정
                                </Link>
                                <Link
                                    className="btn btn-sm btn-outline-danger mx-2"
                                    href={route(
                                        "board.question.delete",
                                        question.id
                                    )}
                                    as="button"
                                    method="delete"
                                    onClick={confirmDelete}
                                >
                                    삭제
                                </Link>
                            </>
                        )}

                        <Link
                            as="button"
                            method="post"
                            href={route("board.question.vote", question)}
                            className="btn btn-sm btn-outline-secondary"
                        >
                            추천
                            <span className="badge rounded-pill bg-success mx-1">
                                {question.votes_count}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <Link
                href={route("board.question.list")}
                className="btn btn-secondary"
            >
                목록으로
            </Link>

            <h5 className="border-bottom my-3 py-2">
                {question.answers.length}개의 답변이 있습니다.
            </h5>
            {question.answers.map((answer) => (
                <div key={answer.id} className="card my-3">
                    <div className="card-body">
                        <div
                            className="card-text"
                            dangerouslySetInnerHTML={{
                                __html: marked.parse(answer.content),
                            }}
                        />
                        <div className="d-flex justify-content-end">
                            {answer.updated_at > answer.created_at && (
                                <CardBadge
                                    title="modified at"
                                    content={dayjs(answer.updated_at).fromNow()}
                                />
                            )}

                            <CardBadge
                                title={answer.user.name}
                                content={dayjs(answer.created_at).fromNow()}
                            />
                        </div>
                        <div className="my-3">
                            {answer.user.id === auth.user.id && (
                                <>
                                    <Link
                                        href={route("board.answer.edit", {
                                            question,
                                            answer,
                                        })}
                                        className="btn btn-sm btn-outline-secondary"
                                    >
                                        수정
                                    </Link>
                                    <Link
                                        href={route("board.answer.delete", {
                                            question,
                                            answer,
                                        })}
                                        method="delete"
                                        as="button"
                                        className="btn btn-sm btn-outline-danger mx-2"
                                        onClick={confirmDelete}
                                    >
                                        삭제
                                    </Link>
                                </>
                            )}

                            <Link
                                as="button"
                                method="post"
                                href={route("board.answer.vote", {
                                    question,
                                    answer,
                                })}
                                className="btn btn-sm btn-outline-secondary"
                            >
                                추천
                                <span className="badge rounded-pill bg-success mx-1">
                                    {answer.votes_count}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

            <form method="post" className="my-3" onSubmit={handleSubmit}>
                <TextField
                    value={data.content}
                    setValue={(value) => setData("content", value)}
                    error={errors.content}
                    height={300}
                />
                <PrimaryButton type="submit">답변등록</PrimaryButton>
            </form>
        </BaseLayout>
    );
}
