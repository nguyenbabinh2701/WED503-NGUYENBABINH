import Joi from "joi";

const Schema = Joi.object({
    title: Joi.string().trim().required(),
    content: Joi.string().required(),
    viewCount: Joi.number().default(0),
    isPublished: Joi.boolean().default(false),
});

const data = {
    title: "  bai dau tien cua toi  ",
    content: "day la noi dung bai viet",
};

const { error, value } = Schema.validate(data);
if (error) {
    console.error("Validation error:", error.details);
} else {
    console.log("Validated data:", value);
}
export default Schema;
