"use client";
import { FloatButton, Space, Typography, Divider } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <FloatButton />

        <Title>This is a test page for the Next.js + Tailwind CSS + Ant Design setup.</Title>
        <Title level={2}>This is a test page for the Next.js + Tailwind CSS + Ant Design setup.</Title>
        <Title level={3}>This is a test page for the Next.js + Tailwind CSS + Ant Design setup.</Title>
        <Title level={4}>This is a test page for the Next.js + Tailwind CSS + Ant Design setup.</Title>
        <Title level={5}>This is a test page for the Next.js + Tailwind CSS + Ant Design setup.</Title>

        <Paragraph>This is a test page for the Next.js + Tailwind CSS + Ant Design setup.</Paragraph>

        <Text>This is a test page for the Next.js + Tailwind CSS + Ant Design setup.</Text>

        <Link href="">This is a test page for the Next.js + Tailwind CSS + Ant Design setup.</Link>

        <Space direction="vertical">
          <Text>Ant Design (default)</Text>
          <Text type="secondary">Ant Design (secondary)</Text>
          <Text type="success">Ant Design (success)</Text>
          <Text type="warning">Ant Design (warning)</Text>
          <Text type="danger">Ant Design (danger)</Text>
          <Text disabled>Ant Design (disabled)</Text>
          <Text mark>Ant Design (mark)</Text>
          <Text code>Ant Design (code)</Text>
          <Text keyboard>Ant Design (keyboard)</Text>
          <Text underline>Ant Design (underline)</Text>
          <Text delete>Ant Design (delete)</Text>
          <Text strong>Ant Design (strong)</Text>
          <Divider />
          <Text italic>Ant Design (italic)</Text>
          <Link href="https://ant.design" target="_blank">
            Ant Design (Link)
          </Link>{" "}
        </Space>
      </main>
    </div>
  );
}
