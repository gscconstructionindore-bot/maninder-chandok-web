'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { urlFor } from '@/sanity/lib/image';
import { ArrowLeft, Check, Facebook, Link2, Linkedin, MessageSquare, Twitter } from 'lucide-react';

interface Comment {
  _key: string;
  name: string;
  comment: string;
  date: string;
}

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category?: string;
  coverImage: any;
  content: string;
  publishedAt: string;
  _createdAt: string;
  likes: number;
  comments: Comment[];
}

interface BlogPostProps {
  post: BlogPost;
}

interface ApiResponse {
  success: boolean;
  likes?: number;
  comment?: Comment;
  message?: string;
}

export default function BlogPost({ post }: BlogPostProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes || 0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [comments, setComments] = useState<Comment[]>(post.comments || []);
  const [newComment, setNewComment] = useState({ name: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    setIsLiked(likedPosts.includes(post._id));
  }, [post._id]);

  const handleLike = async () => {
    if (isLiking) return;

    setIsLiking(true);
    const endpoint = isLiked ? '/api/blog/unlike' : '/api/blog/like';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: post._id }),
      });

      if (response.ok) {
        const data = await response.json() as { likes: number };
        setLikeCount(data.likes);
        setIsLiked(!isLiked);

        const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
        if (isLiked) {
          const updated = likedPosts.filter((id: string) => id !== post._id);
          localStorage.setItem('likedPosts', JSON.stringify(updated));
        } else {
          localStorage.setItem('likedPosts', JSON.stringify([...likedPosts, post._id]));
        }
      }
    } catch (error) {
      console.error('Error updating like:', error);
    } finally {
      setIsLiking(false);
    }
  };

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = `Check out this blog post: ${post.title}`;

    const shareUrls: { [key: string]: string } = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowShareMenu(false);
      }, 2000);
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
      setShowShareMenu(false);
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name.trim() || !newComment.comment.trim() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/blog/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          postId: post._id,
          name: newComment.name.trim(),
          comment: newComment.comment.trim(),
        }),
      });

      if (response.ok) {
        const data = await response.json() as { comments: Comment[] };
        setComments(data.comments);
        setNewComment({ name: '', comment: '' });
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const dateToFormat = post.publishedAt || post._createdAt;
  const formattedDate = dateToFormat
    ? new Date(dateToFormat).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : 'Date not available';

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-40 left-20 w-20 h-20 border-2 border-red-500/20 rotate-45 dark:border-red-400/20" />
      <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-red-600/20 rotate-12 dark:border-red-500/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-8 sm:p-12">
                {/* Date and Category */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <time>
                    {formattedDate}
                  </time>
                  {post.category && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                        {post.category}
                      </span>
                    </>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
                  {post.title}
                </h1>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    {post.excerpt}
                  </p>
                )}

                {/* Cover Image */}
                {post.coverImage && (
                  <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden mb-8">
                    <Image
                      src={urlFor(post.coverImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6 lg:pr-2">
              {/* Like and Share Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Engage with Post
                </h3>
                <div className="flex flex-col gap-3">
                  {/* Like Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLike}
                    disabled={isLiking}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all ${isLiked
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      } ${isLiking ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isLiking ? (
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <svg className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                    <span className="font-semibold">{isLiked ? 'Liked' : 'Like'} ({likeCount})</span>
                  </motion.button>

                  {/* Share Dropdown */}
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span className="font-semibold">Share Post</span>
                    </motion.button>

                    {/* Share Menu Dropdown */}
                    {showShareMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 left-0 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50"
                      >
                        <button
                          onClick={() => handleShare('twitter')}
                          className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Twitter className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-700 dark:text-gray-300">Twitter</span>
                        </button>
                        <button
                          onClick={() => handleShare('facebook')}
                          className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Facebook className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-700 dark:text-gray-300">Facebook</span>
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Linkedin className="w-4 h-4 text-blue-700" />
                          <span className="text-gray-700 dark:text-gray-300">LinkedIn</span>
                        </button>
                        <button
                          onClick={() => handleShare('whatsapp')}
                          className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <MessageSquare className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700 dark:text-gray-300">WhatsApp</span>
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          {copied ? (
                            <>
                              <Check className="w-4 h-4 text-green-600" />
                              <span className="text-green-600">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Link2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                              <span className="text-gray-700 dark:text-gray-300">Copy Link</span>
                            </>
                          )}
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
              {/* Article Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Article Stats
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <svg className={`w-5 h-5 ${isLiked ? 'fill-red-600 text-red-600' : ''}`} fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{likeCount} {likeCount === 1 ? 'Like' : 'Likes'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>{comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}</span>
                  </div>
                </div>
              </motion.div>

              {/* Back to Blog Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-xl p-6 text-white"
              >
                <h3 className="text-lg font-bold mb-4">
                  More Articles
                </h3>
                <Link
                  href="/blog"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to All Posts</span>
                </Link>
              </motion.div>

              {/* Comments Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
              >
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                  Comments ({comments.length})
                </h3>

                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} className="mb-6">
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={newComment.name}
                      onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="comment"
                      className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Comment
                    </label>
                    <textarea
                      id="comment"
                      value={newComment.comment}
                      onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                  >
                    {isSubmitting && (
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    {isSubmitting ? 'Submitting...' : 'Post Comment'}
                  </button>
                </form>

                {/* Comments List */}
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                  {comments.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                      No comments yet. Be the first to comment!
                    </p>
                  ) : (
                    comments.map((comment) => (
                      <div
                        key={comment._key}
                        className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                            {comment.name}
                          </h4>
                          <time className="text-xs text-gray-500 dark:text-gray-400">
                            {new Date(comment.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                            })}
                          </time>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{comment.comment}</p>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-200 dark:border-gray-700" />

        {/* Back to Blog CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All Posts</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
