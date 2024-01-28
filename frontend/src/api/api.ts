import OpenAI from 'openai';
import { ExcuseParameters } from '../interfaces/excuseParameters';

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

export const requestExcuse = async (formData: ExcuseParameters) => {
    const prompt = `generate an excuse based on the following parameters (scale from 1-10), separate excuse title and message (parameters: ${JSON.stringify(formData)})`;

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
    });

    const latestResponse = chatCompletion.choices[0].message.content;
    console.log(latestResponse);
    return latestResponse;
}