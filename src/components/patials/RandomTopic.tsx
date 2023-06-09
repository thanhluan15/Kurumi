import { PostgrestFilterBuilder, PostgrestTransformBuilder } from "@supabase/postgrest-js";
import { QueryFunction, QueryKey, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { GoBook } from "react-icons/go";
import { Link } from "react-router-dom";
import supabase from "~/lib/supabase";
import { Post } from "~/types";
import Button from "../shared/Button";

const RandomTopic = () => {
  const getRandomTopic = async () => {
    const { data } = await supabase
      .rpc<string, PostgrestFilterBuilder<any, any, any>>("get_random_post")
      .single();
    return data;
  };

  const { data: topic } = useQuery<any, QueryFunction<any, QueryKey> | undefined, Post>({
    queryKey: ["topic"],
    queryFn: getRandomTopic,
  });

  return (
    <div className="w-[250px] text-sm h-[200px] bg-white absolute right-0 flex flex-col gap-3 p-5">
      <div className="text-sm font-semibold">Hôm nay đọc gì?</div>
      <div>Nếu bạn buồn phiền không biết đọc gì hôm nay. Hãy để chúng tôi chọn cho bạn</div>
      <Link to={`/topic/${topic?.title}`}>
        <Button className="w-52 h-10 bg-red-700 hover:bg-red-800 hover:border-red-700 border-2 text-white font-semibold rounded-lg flex justify-center items-center  gap-3">
          <GoBook size={20} /> <span className="font-semibold">Đọc truyện ngẫu nhiên</span>
        </Button>
      </Link>
    </div>
  );
};

export default RandomTopic;
