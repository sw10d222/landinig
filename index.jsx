import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FreelanceLandingPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    np;
    e.preventDefault();
    alert("Мессеж илгээгдлээ: " + JSON.stringify(form));
    // Энд backend API руу илгээх код нэмэж болно
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-6"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
      }}
    >
      <div className="backdrop-blur-sm bg-white/70 rounded-xl p-8 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Minimalist Stack</h1>
        <p className="text-lg text-gray-700 mb-6">
          Бид 2016 оноос хойш Software хөгжүүлэлтээр дагнасан бөгөөд бага
          задаргаатайгаар AI ашиглан мэргэжлийн баг бүтээгдэхүүн хөгжүүлж,
          хурдан шуурхай зах зээлд нэвтрүүлэн харилцагчаа тэлсээр байна. Хэрвээ
          танд ERP, CRM, E-commerce, эсвэл захиалгат систем хэрэгтэй бол надтай
          холбогдоорой.
        </p>
        <Button className="text-lg px-6 py-3">Холбогдох</Button>
      </div>

      <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">CRM & ERP</h2>
          <p className="text-gray-600">
            Танай бизнесийн онцлогт тохирсон хэрэглэгчийн болон нөөцийн систем
            зохион бүтээж өгнө.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">E-commerce</h2>
          <p className="text-gray-600">
            Онлайн дэлгүүр, бүтээгдэхүүн борлуулалтын системийг эхнээс нь бүрэн
            хөгжүүлнэ.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">API & Backend</h2>
          <p className="text-gray-600">
            Node.js, Supabase, PostgreSQL ашиглан найдвартай backend систем
            хөгжүүлэлт хийнэ.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-20 bg-white/80 backdrop-blur-md rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Холбоо барих</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Таны нэр"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="И-мэйл хаяг"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Таны мессеж..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full text-lg">
            Илгээх
          </Button>
        </form>
      </div>

      <div className="text-center mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} Танд зориулсан мэргэжлийн хөгжүүлэлт
      </div>
    </div>
  );
}
