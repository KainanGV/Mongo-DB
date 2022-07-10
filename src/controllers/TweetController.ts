import { Args, Mutation, Query, Resolver, Arg } from "type-graphql";
import Tweet from "../schemas/Tweet";
import MongoTweet from '../database/schemas/Tweet'

@Resolver(Tweet)
class TweetController {

    @Query(returns => [Tweet], { name: 'tweets' })
    async find() {
        const tweets = await MongoTweet.find()

        return tweets
    }

    @Query(returns => Tweet, { name: 'tweet' })
    async findById(
        @Arg("id") id: string
    ) {
        const tweet = await MongoTweet.findById(id)

        if(!tweet) throw new Error("Tweet does not exists")

        return tweet
    }

    @Mutation(returns => Tweet, { name: 'createTweet' })
    async create(
        @Arg("author") author: string,
        @Arg("description") description: string
    ) {
        const tweet = await MongoTweet.create({ author, description, likes: 0 })

        return tweet
    }

    @Mutation(returns => Tweet)
    async upvoteTweet(
        @Arg("id") id: string
    ) {
        const tweet = await MongoTweet.findById(id)

        if(!tweet) {
            throw new Error("Tweet does not exists")
        }

        tweet.set({ likes: tweet?.likes + 1 })

        await tweet.save()

        return tweet
    }

    @Mutation(returns => Tweet)
    async downvoteTweet(
        @Arg("id") id: string
    ) {
        const tweet = await MongoTweet.findById(id)

        if(!tweet) {
            throw new Error("Tweet does not exists")
        }

        tweet.set({ likes: tweet?.likes - 1 })

        await tweet.save()

        return tweet
    }
}

export default TweetController